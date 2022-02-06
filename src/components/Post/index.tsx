import { Link as RouterLink } from 'react-router-dom'
import moment from 'moment'
import { Button, Link } from 'designSystem'
import { Post as PostType, User } from 'config/types'
import { useState } from 'react'
import { ConfirmModal } from 'components'

interface PostProps {
  post: PostType
  currentUser: User | null
  onEdit: () => void
  onDelete: () => void
}

const Post: React.FC<PostProps> = ({ post, currentUser, onEdit, onDelete }) => {
  const [showConfirmModal, setShowConfirmModal] = useState<boolean>(false)

  const { id, title, body, updated_at, comment_count, user } = post

  const handleDelete = () => {
    setShowConfirmModal(false)
    onDelete()
  }

  return (
    <main
      className={`flex flex-col justify-between border border-solid border-slate-200 rounded
      h-72 px-6 pt-6 pb-4 shadow-md`}
    >
      <RouterLink to={`/post/${id}`}>
        <h5 className="text-xl font-semibold text-sky-600 cursor-pointer">
          {title}
        </h5>
      </RouterLink>
      <div className="text-sm text-indigo-500 mt-2">
        <span className="font-bold">{user.display_name}</span> |{' '}
        {moment(updated_at).format('MMM Do, YYYY')}
      </div>
      <p className="flex-1 mt-4 overflow-y-auto text-slate-500">{body}</p>

      <div className="flex items-center justify-between text-sm pt-4">
        <span>Comments: {comment_count}</span>
        {!currentUser && (
          <Link
            to="/login"
            label="Edit or Delete"
            className="text-xs text-slate-500 ml-4"
          />
        )}
        {currentUser && currentUser.id === user.id && (
          <div className="flex gap-2">
            <Button label="Edit" size="xs" onClick={onEdit} />
            <Button
              label="Delete"
              size="xs"
              theme="danger"
              onClick={() => setShowConfirmModal(true)}
            />
          </div>
        )}
      </div>
      {showConfirmModal && (
        <ConfirmModal
          title="Are you sure you want to delete this post?"
          onOk={handleDelete}
          onCancel={() => setShowConfirmModal(false)}
        />
      )}
    </main>
  )
}

export default Post

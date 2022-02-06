import moment from 'moment'
import { Comment as CommentType, User } from 'config/types'
import { Button, Link } from 'designSystem'

interface CommentProps {
  comment: CommentType
  currentUser?: User | null
}

const Comment: React.FC<CommentProps> = ({ comment, currentUser }) => {
  return (
    <div className="border border-slate-300 rounded p-4">
      <p>{comment.content}</p>
      <div className="text-sm text-indigo-500 mt-2">
        <span className="font-bold">{comment.user.display_name}</span> |{' '}
        {moment(comment.updated_at).format('MMM Do, YYYY')}
      </div>
      {!currentUser && (
        <Link
          to="/login"
          label="Edit or Delete"
          className="text-xs text-slate-500"
        />
      )}
      {currentUser && currentUser.id === comment.user.id && (
        <div className="flex gap-2 mt-4">
          <Button label="Edit" size="xs" />
          <Button label="Delete" size="xs" theme="danger" />
        </div>
      )}
    </div>
  )
}

export default Comment

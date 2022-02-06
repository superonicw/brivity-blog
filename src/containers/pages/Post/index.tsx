import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Pagination from 'rc-pagination'
import moment from 'moment'
import { useAppProvider } from 'store/providers'
import { Button, Link, Spinner } from 'designSystem'
import { Comment, Loader } from 'components'

const PostPage: React.FC = () => {
  const { postId } = useParams()
  const { user, post, comments, onGetPost, onGetComments } = useAppProvider()

  useEffect(() => {
    if (postId) {
      onGetPost(Number(postId))
    }
  }, [postId, onGetPost])

  if (post.loading) {
    return (
      <div className="flex justify-center">
        <Spinner className="text-sky-600" />
      </div>
    )
  }

  if (!post.post) {
    return null
  }

  const handlePaginationChange = (page: number) => {
    if (post.post) {
      onGetComments({ id: post.post.id, params: { page } })
    }
  }

  const pagination = (
    <Pagination
      total={comments.meta.total_entries}
      current={comments.meta.current_page}
      defaultPageSize={comments.meta.per_page}
      disabled={comments.loading}
      hideOnSinglePage
      prevIcon="<"
      nextIcon=">"
      onChange={handlePaginationChange}
    />
  )

  return (
    <div>
      <h1 className="text-sky-500 text-4xl font-bold">{post.post.title}</h1>
      <div className="text-sm text-indigo-500 mt-2">
        <span className="font-bold">{post.post.user.display_name}</span> |{' '}
        {moment(post.post.updated_at).format('MMM Do, YYYY')}
      </div>
      <p className="mt-4 text-slate-500">{post.post.body}</p>

      <div className="border-t border-dashed border-slate-500 mt-12 pt-8">
        <div className="flex items-center text-slate-500 text-xl mb-4">
          Comments{' '}
          {user.profile ? (
            <Button label="+" size="sm" className="ml-4" />
          ) : (
            <Link
              to="/login"
              label="Leave Comments"
              className="text-xs text-slate-500 ml-4"
            />
          )}
        </div>
        <div className="flex justify-end">{pagination}</div>
        <div className="relative flex flex-col gap-4 my-4">
          {comments.loading && <Loader />}
          {comments.comments.map(comment => (
            <Comment
              key={comment.id}
              comment={comment}
              currentUser={user.profile}
            />
          ))}
        </div>
        <div className="flex justify-end">{pagination}</div>
      </div>
    </div>
  )
}

export default PostPage

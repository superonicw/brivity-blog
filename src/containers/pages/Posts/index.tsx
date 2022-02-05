import { useEffect } from 'react'
import Pagination from 'rc-pagination'
import { useAppProvider } from 'store/providers'
import { Loader, Post } from 'components'
import { Button, Link } from 'designSystem'

const PostsPage = () => {
  const { user, posts, onGetPosts } = useAppProvider()

  useEffect(() => {
    onGetPosts({ page: 1 })
  }, [onGetPosts])

  const handlePaginationChange = (page: number) => {
    onGetPosts({ page })
  }

  const pagination = (
    <Pagination
      total={posts.meta.total_entries}
      current={posts.meta.current_page}
      defaultPageSize={posts.meta.per_page}
      disabled={posts.loading}
      hideOnSinglePage
      prevIcon="<"
      nextIcon=">"
      onChange={handlePaginationChange}
    />
  )

  return (
    <div>
      <h1 className="flex items-center text-4xl font-bold">
        Posts{' '}
        {user.profile ? (
          <Button label="+" size="sm" className="ml-4" />
        ) : (
          <Link
            to="/login"
            label="Please login first to create posts"
            className="text-xs text-slate-500 ml-4"
          />
        )}
      </h1>
      <div className="flex justify-end">{pagination}</div>
      <div className="relative grid gap-4 my-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {posts.loading && <Loader />}
        {posts.posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
      <div className="flex justify-end">{pagination}</div>
    </div>
  )
}

export default PostsPage

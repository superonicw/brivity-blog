import { useState, useEffect } from 'react'
import Pagination from 'rc-pagination'
import { useAppProvider } from 'store/providers'
import { Loader, Post } from 'components'
import { Post as PostType } from 'config/types'
import { Button, Link, Modal } from 'designSystem'
import { PostForm } from 'components/Forms'

const PostsPage = () => {
  const { user, posts, onGetPosts, onCreatePost, onUpdatePost, onDeletePost } =
    useAppProvider()

  const [showForm, setShowForm] = useState<boolean>(false)
  const [editingPost, setEditingPost] = useState<PostType | null>(null)

  useEffect(() => {
    onGetPosts({ page: 1 })
  }, [onGetPosts])

  useEffect(() => {
    if (!posts.loading && !posts.error) {
      setShowForm(false)
    }
  }, [posts.loading, posts.error])

  useEffect(() => {
    if (!showForm) {
      setEditingPost(null)
    }
  }, [showForm])

  const handlePaginationChange = (page: number) => {
    onGetPosts({ page })
  }

  const handleEdit = (post: PostType) => {
    setEditingPost(post)
    setShowForm(true)
  }

  const handlePostSubmit = (values: any) => {
    if (!editingPost) {
      onCreatePost(values)
    } else {
      onUpdatePost({ id: editingPost.id, data: values })
    }
  }

  const toggleShowAddForm = () => setShowForm(prevState => !prevState)

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
          <Button
            label="+"
            size="sm"
            className="ml-4"
            onClick={toggleShowAddForm}
          />
        ) : (
          <Link
            to="/login"
            label="Create Posts"
            className="text-xs text-slate-500 ml-4"
          />
        )}
      </h1>
      <div className="flex justify-end">{pagination}</div>
      <div className="relative grid gap-4 my-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {posts.loading && <Loader />}
        {posts.posts.map(post => (
          <Post
            key={post.id}
            post={post}
            currentUser={user.profile}
            onEdit={() => handleEdit(post)}
            onDelete={() => onDeletePost(post.id)}
          />
        ))}
      </div>
      <div className="flex justify-end">{pagination}</div>

      {showForm && (
        <Modal onClose={toggleShowAddForm}>
          <PostForm
            defaultValues={editingPost}
            loading={posts.loading}
            error={posts.error}
            onSubmit={handlePostSubmit}
          />
        </Modal>
      )}
    </div>
  )
}

export default PostsPage

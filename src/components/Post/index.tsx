import { Link } from 'react-router-dom'
import moment from 'moment'
import { Post as PostType } from 'config/types'

interface PostProps {
  post: PostType
}

const Post: React.FC<PostProps> = ({ post }) => {
  const { id, title, body, updated_at, comment_count, user } = post

  return (
    <main
      className={`flex flex-col justify-between border border-solid border-slate-200 rounded
      h-72 px-6 pt-6 pb-4 shadow-md`}
    >
      <Link to={`/post/${id}`}>
        <h5 className="text-xl font-semibold text-sky-600 cursor-pointer">
          {title}
        </h5>
      </Link>
      <div className="text-sm text-indigo-500 mt-2">
        <span className="font-bold">{user.display_name}</span> |{' '}
        {moment(updated_at).format('MMM Do, YYYY')}
      </div>
      <p className="flex-1 mt-4 overflow-y-auto text-slate-500">{body}</p>

      <div className="flex justify-between text-sm pt-4">
        Comments: {comment_count}
      </div>
    </main>
  )
}

export default Post

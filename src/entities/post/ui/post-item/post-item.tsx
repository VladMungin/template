import type { Post } from '@/entities/post'
import { Link } from '@tanstack/react-router'

interface PostItemProps {
  post: Post
}

export const PostItem = ({ post }: PostItemProps) => {
  return (
    <li
      key={post.id}
      className="flex gap-2 border p-2 border-blue-800 mb-2 cursor-pointer rounded-2xl"
    >
      <p>{post.id}</p>
      <Link to={`${post.id}`} className="w-full block gap-2">
        {post.title}
      </Link>
    </li>
  )
}

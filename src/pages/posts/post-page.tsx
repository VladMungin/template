import { createRoute, Link } from '@tanstack/react-router'
import { Layout } from '@/pages'
import { postQueryOptions, useGetPost } from '@/entities/post'
import { Button } from '@/shared/ui/button.tsx'

export const PostPage = () => {
  const postId = +postRoute.useParams().postId
  const postQuery = useGetPost(postId)

  return (
    <div className="flex gap-4 items-center">
      <p>{postQuery.data?.title}</p>
      <Button>
        <Link to={'/edit/' + postId}>Edit</Link>
      </Button>
    </div>
  )
}

export const postRoute = createRoute({
  getParentRoute: () => Layout,
  path: '$postId',
  component: PostPage,
  loader: ({ context, params }) => {
    return context.queryClient.ensureQueryData(postQueryOptions(+params.postId))
  },
})

import { queryOptions, useSuspenseQuery } from '@tanstack/react-query'
import { getPost } from '@/entities/post/model/_request.ts'

export const postQueryOptions = (postId: number) =>
  queryOptions({
    queryKey: ['posts', postId],
    queryFn: () => getPost(postId),
  })

export const useGetPost = (postId: number) => useSuspenseQuery(postQueryOptions(postId))

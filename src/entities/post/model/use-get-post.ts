import { queryOptions, useQuery } from '@tanstack/react-query'
import { getPost } from '@/entities/post/model/_request.ts'

export const postQueryOptions = (postId: number) =>
  queryOptions({
    queryKey: ['posts', postId],
    queryFn: () => getPost(postId),
  })

export const useGetPost = (postId: number) => useQuery(postQueryOptions(postId)) // можно заменить на useSuspenseQuery - это позволит предзагружать данные во время рендерига

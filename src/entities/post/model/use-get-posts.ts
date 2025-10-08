import { queryOptions, useQuery } from '@tanstack/react-query'
import { getPosts } from '@/entities/post/model/_request.ts'

export const postsQueryOptions = queryOptions({
  queryKey: ['posts'],
  queryFn: getPosts,
})

export const useGetPosts = () => useQuery(postsQueryOptions)

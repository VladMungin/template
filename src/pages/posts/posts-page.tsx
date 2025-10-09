import { createRoute, Link } from '@tanstack/react-router'
import { Layout } from '@/pages'
import { lastUpdatedPostAtom, useGetPosts } from '@/entities/post'
import { PostItem } from '@/entities/post/ui'
import { useAtomValue } from 'jotai'
import { Spinner } from '@/shared/ui'

const PostsPage = () => {
  const postsQuery = useGetPosts()
  const posts = postsQuery.data
  const isLoading = postsQuery.isLoading

  const lastUpdatedPost = useAtomValue(lastUpdatedPostAtom)

  return (
    <>
      <h3 className="text-red-500 text-3xl mb-5">
        {lastUpdatedPost?.id ? (
          <Link to={'/' + lastUpdatedPost?.id} className="underline">
            Последний обновленный пост: {lastUpdatedPost?.id}
          </Link>
        ) : (
          'ОБНОВИТЕ КАКОЙ НИБУДЬ ПОСТ И УВИДИТЕ ЕГО ID ЗДЕСЬ'
        )}
      </h3>
      {isLoading ? <Spinner /> : null}
      <ul className="flex flex-col">
        {posts?.map(post => (
          <PostItem post={post} key={post.id} />
        ))}
      </ul>
    </>
  )
}

export const homeRoute = createRoute({
  getParentRoute: () => Layout,
  path: '/',
  component: PostsPage,
  // loader: ({ context }) => context.queryClient.ensureQueryData(postsQueryOptions), - это юзаем если хотим чтобы компонент не отображался до выполнения запроса
})

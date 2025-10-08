import {createRoute} from "@tanstack/react-router";
import {Layout} from "@/pages";
import {lastUpdatedPostAtom, postsQueryOptions, useGetPosts} from "@/entities/post";
import {PostItem} from "@/entities/post/ui";
import {useAtomValue} from "jotai";

const PostsPage = () => {
	const postsQuery = useGetPosts()
	const posts = postsQuery.data

	const lastUpdatedPost = useAtomValue(lastUpdatedPostAtom)

	return (
			<>
				<h3 className='text-red-500 text-3xl mb-5'>

				{lastUpdatedPost?.id ? `Последний обновленный пост: ${lastUpdatedPost?.id}` : 'ОБНОВИТЕ КАКОЙ НИБУДЬ ПОСТ И УВИДИТЕ ЕГО ID ЗДЕСЬ'}
				</h3>

				<ul className='flex flex-col'>
					{posts?.map((post) => (
							<PostItem post={post} key={post.id} />
					))}
				</ul>
			</>

	);
}

export const homeRoute = createRoute({
	getParentRoute: () => Layout,
	path: '/',
	component: PostsPage,
	loader:  ({context}) => context.queryClient.ensureQueryData(postsQueryOptions)
})

import {useMutation} from "@tanstack/react-query";
import {editPost, lastUpdatedPostAtom, type Post} from "@/entities/post";
import {queryClient} from "@/shared/config";
import {useSetAtom} from "jotai";


export const useEditPost = (postId: number) => {
	const setLastUpdatedPost = useSetAtom(lastUpdatedPostAtom)

	return useMutation({
		mutationKey: ['post', postId],
		mutationFn: async (data: Post) => editPost(data),
		onSuccess: (data) => {
			setLastUpdatedPost(data);
			queryClient.invalidateQueries()
		}
	})
}

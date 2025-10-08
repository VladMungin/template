import {baseQuery} from "@/shared/api/axios.instance.ts";
import type {Post} from "@/entities/post";

export const getPosts = async ():Promise<Post[]> => (await baseQuery('/posts')).data

export const getPost = async (id:number):Promise<Post> => (await baseQuery(`/posts/${id}`)).data

export const editPost = async (data: Post):Promise<Post> => (await baseQuery(`/posts/${data.id}`, {
	method: "PUT",
	data
})).data

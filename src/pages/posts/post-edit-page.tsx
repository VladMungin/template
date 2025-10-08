import {createRoute, Link} from "@tanstack/react-router";
import {Layout} from "@/pages";
import {postQueryOptions, useEditPost, useGetPost} from "@/entities/post";
import {Controller, type SubmitHandler, useForm} from "react-hook-form";
import {Button, Input, Spinner} from "@/shared/ui";


interface PostEditForm {
	id: string;
	title: string;
}

const PostEditPage = () => {
	const postId = +postEditRoute.useParams().postId;
	const postQuery = useGetPost(postId)

	const editPostQuery = useEditPost(postId)

	const form = useForm<PostEditForm>({
		defaultValues: {
			id: postId.toString(),
			title: postQuery.data.title,
		}
	})

	const onSubmit:SubmitHandler<PostEditForm> = async (data) => {
		try {
			const res = await editPostQuery.mutateAsync(data)

			console.log(res)
		} catch (e){
			console.log(e)
		}
	}
	return(
	<>
		<Button><Link to='/'>Домой</Link></Button>
	<form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-4 max-w-1/2 mx-auto h-screen justify-center'>
		<Controller control={form.control} render={({field}) => {
			return <Input {...field}/>
		}} name='title'/>
		<Button type="submit" >
			{editPostQuery.isPending ? <Spinner/> : 'Save'}</Button>
	</form>
	</>)
}

export const postEditRoute = createRoute({
	getParentRoute: () => Layout,
	path: "edit/$postId",
	component: PostEditPage,
	loader: ({context, params}) => {
		return context.queryClient.ensureQueryData(postQueryOptions(+params.postId))}
})

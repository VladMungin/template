import {createRootRouteWithContext, Outlet} from "@tanstack/react-router";
import type {QueryClient} from "@tanstack/query-core";
import '@/app/styles/app.css'

export const Layout = createRootRouteWithContext<{
	queryClient: QueryClient
}>()({
	head: () => ({
		meta:[]
	}),
	component: () => (
			<div className='container mx-auto mt-5'>
				<Outlet/>
			</div>
	)
})

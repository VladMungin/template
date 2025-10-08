import {createRouter} from "@tanstack/react-router";
import {routeTree} from './routerTree'
import {QueryClient} from "@tanstack/query-core";

export const queryClient = new QueryClient()

export const router = createRouter({
	routeTree,
	context: {
		queryClient
	},
	defaultPreload: 'intent',
	scrollRestoration: true,
	defaultStructuralSharing: true,
	defaultPreloadStaleTime: 0,
})

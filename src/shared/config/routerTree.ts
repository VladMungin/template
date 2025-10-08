import {homeRoute, Layout, postEditRoute, postRoute} from "@/pages";

export const routeTree = Layout.addChildren([homeRoute, postRoute, postEditRoute])

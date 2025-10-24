import { homeRoute, Layout, postEditRoute, postRoute, loginRoute, registerRoute } from '@/pages'

export const routeTree = Layout.addChildren([
  homeRoute,
  postRoute,
  postEditRoute,
  loginRoute,
  registerRoute,
])

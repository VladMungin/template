import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'
import type { QueryClient } from '@tanstack/query-core'
import '@/app/styles/app.css'

export const Layout = createRootRouteWithContext<{
  queryClient: QueryClient
}>()({
  head: () => ({
    meta: [],
  }),
  component: () => {
    return (
      <div className="flex">
        <main className="container mx-auto mt-5">
          <Outlet />
        </main>
      </div>
    )
  },
})

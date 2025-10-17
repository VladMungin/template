import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'
import type { QueryClient } from '@tanstack/query-core'
import '@/app/styles/app.css'
import { Header } from '@/widgets/header/header.tsx'

export const Layout = createRootRouteWithContext<{
  queryClient: QueryClient
}>()({
  head: () => ({
    meta: [],
  }),
  component: () => {
    return (
      <div className="flex">
        <Header />
        <main className="container mx-auto mt-20">
          <Outlet />
        </main>
      </div>
    )
  },
})

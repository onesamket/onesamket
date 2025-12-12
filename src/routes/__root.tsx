
import { ErrorState } from '@/components/states/error-state'
import { LoadingState } from '@/components/states/loading-state'
import { NotFoundState } from '@/components/states/not-found-state'
import type { QueryClient } from '@tanstack/react-query'
import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'
interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <>
      <Outlet />
    </>
  ),
  errorComponent: RootErrorComponent,
  pendingComponent: RootPendingComponent,
  notFoundComponent: RootNotFoundComponent,
})

function RootErrorComponent({ error }: { error: Error }) {
  return (
    <ErrorState
      title="Oops! Something went wrong"
      message={error.message || 'We encountered an unexpected issue. Don\'t worry, it happens to the best of us.'}
      className="min-h-screen"
    />
  )
}

function RootPendingComponent() {
  return <LoadingState className="min-h-screen" />
}

function RootNotFoundComponent() {
  return (
    <NotFoundState
      className="min-h-screen"
      title="Page Not Found"
      message="The page you're looking for doesn't exist or has been moved."
    />
  )
}

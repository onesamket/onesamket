
import { ErrorState } from '@/components/states/error-state'
import { LoadingState } from '@/components/states/loading-state'
import { NotFoundState } from '@/components/states/not-found-state'
import { TanStackDevtools } from '@tanstack/react-devtools'
import type { QueryClient } from '@tanstack/react-query'
import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'
interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <>
      <Outlet />
      <TanStackDevtools
        config={{
          position: 'bottom-right',
        }}
      />
    </>
  ),
  errorComponent: RootErrorComponent,
  pendingComponent: RootPendingComponent,
  notFoundComponent: RootNotFoundComponent,
})

function RootErrorComponent({ error }: { error: Error }) {
  return (
    <ErrorState
      title="Application Error"
      message={error.message || 'An unexpected error occurred. Please try again later.'}
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
      showHomeButton={true}
      showBackButton={true}
    />
  )
}

import { RouterProvider, createRouter } from '@tanstack/react-router'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from './providers/theme-provider'

import { routeTree } from './routeTree.gen'

import reportWebVitals from './reportWebVitals.ts'
import './styles.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const queryClient = new QueryClient()

// Create router with initial context
// Auth will be checked in route loaders/components using React context
const router = createRouter({
  routeTree,
  context: {
    queryClient: queryClient,
  },

  defaultPreload: 'intent',
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
})

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// Render the app
const rootElement = document.getElementById('app')
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="system" storageKey="ui-theme">
          <RouterProvider router={router} />
        </ThemeProvider>
      </QueryClientProvider>
    </StrictMode>,
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router'
import App from './App'
import Resume from './pages/Resume'

// Create root route
const rootRoute = createRootRoute()

// Create index route
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: App
})

// Create resume route
const resumeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/resume',
  component: Resume
})

// Create route tree
const routeTree = rootRoute.addChildren([indexRoute, resumeRoute])

// Create router instance
export const router = createRouter({ routeTree })

// Register router for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

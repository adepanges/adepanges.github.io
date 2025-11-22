import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router'
import App from './App'
import Resume from './pages/Resume'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'

// Create root route
const rootRoute = createRootRoute({})

// Create index route
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: App,
})

// Create resume route
const resumeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/resume',
  component: Resume,
})

// Create terms route
const termsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/terms',
  component: Terms,
})

// Create privacy route
const privacyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/privacy',
  component: Privacy,
})

// Create route tree
const routeTree = rootRoute.addChildren([indexRoute, resumeRoute, termsRoute, privacyRoute])

// Create router instance
export const router = createRouter({ routeTree })

// Register router for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
  
  // Define meta types
  interface RouteMeta {
    title?: string
  }
}

import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

const publicRotes: RouteObject[] = [
  {
    element: <div>login</div>,
    path: '/login',
  },
]

const privateRoutes: RouteObject[] = [
  {
    element: <div>hello</div>,
    path: '/',
  },
]
const router = createBrowserRouter([
  ...publicRotes,
  {
    children: privateRoutes,
    element: <PrivateRoutes />,
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
function PrivateRoutes() {
  const isAuthenticated = false

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}

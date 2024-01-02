import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import PageLogin from '@/components/pages/page-login/page-login'
import PageSignUp from '@/components/pages/sign-up/page-sign-up'
import { Decks } from '@/pages/decks'

export const PATH = {
  decks: '/',
  login: '/login',
  loginOut: '/logOut',
  signUp: '/signUp',
}

const publicRotes: RouteObject[] = [
  {
    element: <PageLogin />,
    // path: '/login',
    path: PATH.login,
  },
  {
    element: <PageSignUp />,
    // path: '/signUp',
    path: PATH.signUp,
  },
]

const privateRoutes: RouteObject[] = [
  {
    element: <Decks />,
    path: PATH.decks,
  },
  {
    element: <div>log out</div>,
    path: PATH.loginOut,
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

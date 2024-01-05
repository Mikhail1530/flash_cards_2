import { useDispatch } from 'react-redux'
import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import PageLogin from '@/components/pages/page-login/page-login'
import PageSignUp from '@/components/pages/sign-up/page-sign-up'
import CardsPage from '@/pages/cards/cardsPage'
import DesksPage from '@/pages/desksPage/desksPage'
import { appAC } from '@/services/app.slice'
import { useGetAuthMeQuery } from '@/services/auth/auth.servies.'

export const PATH = {
  cards: '/cards',
  decks: '/',
  login: '/login',
  loginOut: '/logOut',
  signUp: '/signUp',
}

const publicRotes: RouteObject[] = [
  {
    element: <PageLogin />,
    path: PATH.login,
  },
  {
    element: <PageSignUp />,
    path: PATH.signUp,
  },
]

const privateRoutes: RouteObject[] = [
  {
    element: <DesksPage />,
    path: PATH.decks,
  },
  {
    element: <div>log out</div>,
    path: PATH.loginOut,
  },
  {
    // element: <div>card</div>,
    element: <CardsPage />,
    path: PATH.cards,
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
  const dispatch = useDispatch()
  const { data, isError, isLoading } = useGetAuthMeQuery()
  const isAuthenticated = !isError

  if (isLoading) {
    return null
  }
  if (data) {
    dispatch(appAC.setUser(data))
  }

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}

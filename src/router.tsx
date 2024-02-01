import { useDispatch } from 'react-redux'
import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import CardsPage from '@/pages/cards/cardsPage'
import LearnCards from '@/pages/cards/learnCards/learnCards'
import DesksPage from '@/pages/desksPage/desksPage'
import PageLogin from '@/pages/page-login/page-login'
import PageSignUp from '@/pages/sign-up/page-sign-up'
import { appAC } from '@/services/app.slice'
import { useMeQuery } from '@/services/auth/auth.servies'

export const PATH = {
  cardTest: '/cardTest',
  cards: '/cards',
  decks: '/',
  learn: '/cards/learn',
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
    element: <DesksPage />,
    path: PATH.decks,
  },
  {
    element: <div>log out</div>,
    path: PATH.loginOut,
  },
  {
    element: <CardsPage />,
    path: PATH.cards,
    // children:[
    //   {element: <LearnCards/>, path: PATH.learn}
    // ]
  },
  { element: <LearnCards />, path: PATH.learn },
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
  const { data, isError, isLoading } = useMeQuery()

  const isAuthenticated = !isError

  if (isLoading) {
    return null
  }
  if (data) {
    dispatch(appAC.setUser(data))
  }

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}
//<Route path="*" element={<NoMatch />} />

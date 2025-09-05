import { Navigate, type RouteObject } from 'react-router-dom'

import Layout from './components/Layout'

import HomePage from './pages/Home'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Navigate to="home" replace />
      },
      {
        path: "home",
        element: <HomePage />
      }
    ]
  },
  {
    path: "login",
    element: <div> Sorry! the login Page is not implemented yet.</div> // Replace with <Login /> when available
  }
]

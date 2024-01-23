import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Article from './pages/Article'
import Page from './Page'
import './index.css'
import RootLayout from './layout'
import ErrorPage from './pages/Error'
import Resume from './pages/Resume'


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Page />
      },
      {

        path: "/resume",
        element: <Resume />
      },
      {
        path: "/articles",
        element: <Article />
      }
    ],
  },


])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

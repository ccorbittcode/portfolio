import './App.css'
import './index.css'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Experience from './pages/Experience.jsx'
import Projects from './pages/Projects.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import Home from './pages/Home.jsx'
import Layout from './Layout.jsx'
import PageTransitionWrapper from './PageTransitionWrapper.jsx'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <PageTransitionWrapper><Home /></PageTransitionWrapper>,
      },
      {
        path: "/about",
        element: <PageTransitionWrapper><About /></PageTransitionWrapper>,
      },
      {
        path: "/projects",
        element: <PageTransitionWrapper><Projects /></PageTransitionWrapper>,
      },
      {
        path: "/experience",
        element: <PageTransitionWrapper><Experience /></PageTransitionWrapper>,
      },
      {
        path: "/contact",
        element: <PageTransitionWrapper><Contact /></PageTransitionWrapper>,
      },
    ]
  },

]);

function App() {

  return (
    <>
          <RouterProvider router={router} />
    </>
  )
}

export default App

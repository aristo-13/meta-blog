import {createBrowserRouter,Route,RouterProvider} from 'react-router-dom'
import PagesLayout from './pages/PagesLayout'
import Homepage from './pages/Homepage'
import BlogPage from './pages/BlogPage'
import BlogPost from './pages/BlogPost'
import AuthorsPage from './pages/AuthorsPage'
import Contact from './pages/Contact'


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <PagesLayout />,
      children: [
        {
          index: true,
          element: <Homepage />
        },
        {
         path:"blogpage",
          element: <BlogPage />
        },
        {
         path:"blogpost",
          element: <BlogPost />
        },
        {
         path:"authors",
          element: <AuthorsPage />
        },
        {
         path:"contact",
          element: <Contact />
        },
      ]
    }
   ])
  
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App

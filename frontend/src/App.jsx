import {createBrowserRouter,Route,RouterProvider} from 'react-router-dom'
import PagesLayout from './pages/PagesLayout'
import Homepage from './pages/Homepage'
import BlogPage from './pages/BlogPage'
import BlogPost from './pages/BlogPost'
import AuthorsPage from './pages/AuthorsPage'
import Contact from './pages/Contact'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import AuthorDetailsPage from './pages/AuthorDetailsPage'
import SingleBlog from './pages/SingleBlog'

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
          path:"blogs/:id",
          element: <SingleBlog />
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
          path:"authors/:id",
          element: <AuthorDetailsPage />
        },
        {
         path:"contact",
          element: <Contact />
        },
        {
          path:"login",
          element: <SignIn />
        },
        {
         path:"signup",
          element: <SignUp />
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

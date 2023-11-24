import {createBrowserRouter,Route,RouterProvider} from 'react-router-dom'
import PagesLayout from './pages/PagesLayout'
import Homepage from './pages/Homepage'
import BlogPage from './pages/BlogPage'
import BlogPost from './pages/BlogPost'


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

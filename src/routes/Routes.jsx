import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/category";
import NewsLayout from "../layout/NewsLayout";
import News from "../pages/Home/News/News/News";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>  ,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/category/:id",
          element: <Category></Category>,
          loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)  
        }
      ]
    },
    {
      path: "news",
      element: <NewsLayout></NewsLayout>,
      children: [
        {
          path: ":id",
          element: <News></News>,
          loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
        }
      ]
    }
])

export default router;
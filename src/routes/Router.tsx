import MainLayout from "@/layout/MainLayout";
import Home from "@/pages/Home";
import MovieDetails from "@/pages/MovieDetails";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:"movies/:id",
        element:<MovieDetails/>
      }
    ]
  },
]);

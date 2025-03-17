import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";
import MainBanner from "./components/MainBanner/MainBanner";
import AdminDashboard from "./admindashboard/AdminDashboard";
import AdminLayout from "./components/AdminLayout/AdminLayout";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainBanner/>,
      },
      
    ],
  },


  {
    path: "/dashboard",
    element: <AdminLayout />,
    children: [
      {
        path: "/dashboard",
        element: <AdminDashboard/>,
      },
      
    ],
  }

]);




function App() {

  return <RouterProvider router={router} />
}

export default App

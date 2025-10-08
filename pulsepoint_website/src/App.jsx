import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/pages/layout.jsx";
import Home from "./components/pages/Home.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: '/', element: <Home /> }
            
        ]
    }
])


function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

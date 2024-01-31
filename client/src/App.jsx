import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Register from "./pages/Register"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Single from "./pages/Single"
import Write from "./pages/Write"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const router = createBrowserRouter([
  {
    path: "/",
    element: <div> 
    <Navbar/>
    <Home/>
    <Footer/>
    </div>
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/write",
    element: <Write/>,
  },
  {
    path: "/single",
    element: <Single/>,
  },
]);



function App() {
  return <div><RouterProvider router={router}/></div>;
}

export default App;

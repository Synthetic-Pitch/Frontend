import { createBrowserRouter} from "react-router-dom";
import App from "../App"
import Home from "../pages/Home.jsx"
import LoginPage from "../pages/LoginPage"
import PageNotFound from "../pages/PageNotFound.jsx";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/home",
        element: <Home/>
      },
      {
        path: "/login",
        element: <LoginPage/>
      },
      {
        path:"/dishes"
      },
      {
        path:"*",
        element:<PageNotFound/>
      }
     
    ]
  }
]);

export default Routes;
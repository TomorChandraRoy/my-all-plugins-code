import { createHashRouter} from "react-router-dom";
import Dashboard from "../components/Dashboard";
import About from "../components/About";
import Block from "../components/Block";
 
 

const router = createHashRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "about",
        element: <About/>,
      },
      {
        path: "block",
        element: <Block/>,
      }
    ],
  },
]);

export default router;
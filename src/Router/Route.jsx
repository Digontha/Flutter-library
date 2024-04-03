import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Discover from "../Pages/Discover/Discover";
import UiKits from "../Pages/Uikits/UiKits";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
          path: "/",
          element:<Discover></Discover>
        },
        {
          path: "/uiKit",
          element:<UiKits></UiKits>
        }
      ]
    },
  ]);

  export default router
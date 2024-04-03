import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Discover from "../Pages/Discover/Discover";
import UiKits from "../Pages/Uikits/UiKits";
import Screens from "../Pages/Screens/Screens";
import Articles from "../Pages/Articles/Articles";
import BecomeSponsor from "../Pages/BecomeSponsor/BecomeSponsor";
import HireFlutterDev from "../Pages/HireFlutterDev/HireFlutterDev";

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
        ,
        {
          path: "/screens",
          element:<Screens></Screens>
        },
        {
          path: "/articles",
          element:<Articles></Articles>
        },
        {
          path: "/becomeSponsor",
          element:<BecomeSponsor></BecomeSponsor>
        },
        {
          path: "/hireFlutterDev",
          element:<HireFlutterDev></HireFlutterDev>
        },
      ]
    },
  ]);

  export default router
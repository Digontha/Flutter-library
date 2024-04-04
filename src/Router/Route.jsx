import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Discover from "../Pages/Discover/Discover";
import UiKits from "../Pages/Uikits/UiKits";
import Screens from "../Pages/Screens/Screens";
import Articles from "../Pages/Articles/Articles";
import BecomeSponsor from "../Pages/BecomeSponsor/BecomeSponsor";
import HireFlutterDev from "../Pages/HireFlutterDev/HireFlutterDev";
import Popular from "../Pages/Popular/Popular";
import Auth from "../Pages/Auth/Auth";
import Shop from "../Pages/Shop/Shop";
import Chat from "../Pages/Chat/Chat";
import Verification from "../Pages/Verification/Verification";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Food from "../Pages/Food/Food";
import Restaurant from "../Pages/Restaurant/Restaurant";
import Fitness from "../Pages/Fitness/Fitness";
import New from "../Pages/New/New";

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
        {
          path: "/popular",
          element:<Popular></Popular>
        },
        {
          path: "/new",
          element:<New></New>
        },
        {
          path: "/auth",
          element:<Auth></Auth>
        },
        {
          path: "/shop",
          element:<Shop></Shop>
        },
        {
          path: "/chat",
          element:<Chat></Chat>
        },
        {
          path: "/verification",
          element:<Verification></Verification>
        },
        {
          path: "/dashboard",
          element:<Dashboard></Dashboard>
        },
        {
          path: "/food",
          element:<Food></Food>
        },
        {
          path: "/restaurant",
          element:<Restaurant></Restaurant>
        },
        {
          path: "/fitness",
          element:<Fitness></Fitness>
        },
      ]
    },
  ]);

  export default router
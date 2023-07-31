import "./App.css";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import WelcomePage from "./Pages/WelcomePage";
import LandingPage from "./Pages/LandingPage";
import jwtDecode from "jwt-decode";
import UserEdit from "./Pages/UserEdit";
import UserCreate from "./Pages/UserCreate";
import ForgotPassword from "./Pages/ForgotPassword";
import UserList from "./Pages/UserList";
import InFlow from "./Pages/InFlow";
import Dummy from "./Pages/Dummy";
import Outflow from "./Pages/Outflow";
import ChangePassword from "./Pages/ChangePassword";
import ResetPassword from "./Pages/ResetPasword";
function App() {
  // console.log(
  //   "JWt returned data from app.js",
  //   jwtDecode(localStorage.getItem("token"))
  // );
  // const data = jwtDecode(localStorage.getItem("token"));
  // console.log("role from app.js", data.role);
  // const role = data.role;
  // localStorage.setItem("role",role)

  // const userRouter = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <WelcomePage />,
  //   },
  //   {
  //     path: "/lander",
  //     element: <LandingPage />,
  //   },
  // ]);

  const adminRouter = createBrowserRouter(
    [
      {
        path: "/",
        element: <WelcomePage />,
      },
      // {
      //   path: "/",
      //   element: <LandingPage />,
      // },
      {
        path: "/user-edit",
        element: <UserEdit />,
      },
      {
        path: "/user-create",
        element: <UserCreate />,
      },
      {
        path: "/landingpage",
        element: <LandingPage />,
      },
      {
        path: "/user-list",
        element: <UserList />,
      },
      {
        path: "/inflow",
        element: <InFlow />,
      },
      {
        path: "/dummy",
        element: <Dummy />,
      },
      {
        path: "/outflow",
        element: <Outflow />,
      },
      {
        path: "/forgotPassword",
        element: <ForgotPassword />,
      },
      {
        path: "/changePassword",
        element: <ChangePassword />,
      },
      {
        path: "/resetPwd/:token",
        element: <ResetPassword />,
      },
    ],
    { basename: "/CashForecasting" }
  );

  return (
    <div>
      <RouterProvider router={adminRouter} />
    </div>
  );
}

export default App;

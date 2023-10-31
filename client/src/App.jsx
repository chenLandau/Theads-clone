import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  LandingLayout,
  Activity,
  HomeFeed,
  DashboardLayout,
  Login,
  Profile,
  Search,
  NewThread,
  Error,
  Register,
  Landing,
  Post,
} from "./pages/index";
import { action as registerAction } from "./pages/authPages/Register";
import { action as loginAction } from "./pages/authPages/Login";
import { loader as dashboardLoader } from "./pages/mainPages/DashboardLayout";
import { loader as searchLoader } from "./pages/mainPages/Search";
import { loader as activityLoader } from "./pages/mainPages/Activity";
const route = createBrowserRouter([
  {
    path: "/",
    element: <LandingLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "register",
        element: <Register />,
        action: registerAction,
      },
      {
        path: "login",
        element: <Login />,
        action: loginAction,
      },
    ],
  },
  {
    path: "/threads",
    element: <DashboardLayout />,
    loader: dashboardLoader,
    children: [
      {
        index: true,
        element: <HomeFeed />,
      },
      {
        path: "search",
        element: <Search />,
        loader: searchLoader,
      },
      {
        path: "activity",
        element: <Activity />,
        loader: activityLoader,
      },
      {
        path: ":username",
        children: [
          {
            index: true,
            element: <Profile />,
          },
          {
            path: "post/:postId",
            element: <Post />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={route} />;
}

export default App;

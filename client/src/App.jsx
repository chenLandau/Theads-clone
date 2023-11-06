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
  EditProfile,
} from "./pages/index";
import { action as registerAction } from "./pages/authPages/Register";
import { action as loginAction } from "./pages/authPages/Login";
import { action as editProfileAction } from "./pages/subPages/EditProfile";
import { loader as dashboardLoader } from "./pages/mainPages/DashboardLayout";
import { loader as homeFeedLoader } from "./pages/mainPages/HomeFeed";
import { loader as searchLoader } from "./pages/mainPages/Search";
import { loader as activityLoader } from "./pages/mainPages/Activity";
import { loader as userProfileLoader } from "./pages/mainPages/Profile";

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
        loader: homeFeedLoader,
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
            loader: userProfileLoader,
          },
          {
            path: "post/:postId",
            element: <Post />,
          },
          {
            path: "EditProfile",
            element: <EditProfile />,
            action: editProfileAction,
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

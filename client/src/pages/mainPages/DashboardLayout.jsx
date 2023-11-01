import React, { createContext, useContext, useState, useEffect } from "react";
import {
  Outlet,
  redirect,
  useLoaderData,
  useNavigation,
} from "react-router-dom";
import { FaThreads } from "react-icons/fa6";
import { Navbar, Sidebar, Loading } from "../../components";
import Wrapper from "../../assets/wrappers/Dashboard";
import NewThread from "./NewThread";
import { useDispatch } from "react-redux";
import { updateAuthUser } from "../../features/user/userSlice";
import { getCurrentUser } from "../../services/userService";
export const loader = async () => {
  try {
    const data = await getCurrentUser();
    return data;
  } catch (error) {
    return redirect("/");
  }
};
const DashboardContext = createContext();

const DashboardLayout = () => {
  const { user } = useLoaderData();
  const [showNewThread, setShowNewThread] = useState(false);
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  const dispatch = useDispatch();
  const toggleNewThreadWindow = (stateWindow) => {
    setShowNewThread(stateWindow);
  };
  useEffect(() => {
    const { _id, following } = user;
    dispatch(updateAuthUser({ _id, following }));
  }, []);
  return (
    <DashboardContext.Provider
      value={{
        user,
        showNewThread,
        toggleNewThreadWindow,
      }}
    >
      <Wrapper>
        <main className="dashboard">
          <div className="icon-container">
            <FaThreads className="icon" />
          </div>
          <Navbar />
          <Sidebar />
          <NewThread />
          {isPageLoading ? <Loading /> : <Outlet context={{ user }} />}
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};
export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;

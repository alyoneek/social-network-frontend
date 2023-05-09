import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";

import useAuth from "@hooks/useAuth";

const RequireAuthRoute: FC = () => {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return <Outlet />;
  } else {
    return <Navigate to="/signin" />;
  }
};

export default RequireAuthRoute;

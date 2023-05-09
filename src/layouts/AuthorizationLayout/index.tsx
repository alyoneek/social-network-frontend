import { FC } from "react";
import { Outlet } from "react-router-dom";

const AuthorizationLayout: FC = () => {
  return (
    <div>
      AuthorizationLayout <Outlet />
    </div>
  );
};

export default AuthorizationLayout;

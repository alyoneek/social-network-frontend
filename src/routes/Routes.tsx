import { Routes as ReactRoutes, Route } from "react-router-dom";

import AuthorizationLayout from "@layouts/AuthorizationLayout";
import MainLayout from "@layouts/MainLayout";
import Friends from "@pages/Friends";
import Newsline from "@pages/Newsline";
import NotFound from "@pages/NotFound";
import Profile from "@pages/Profile";
import Signin from "@pages/Signin";
import Signup from "@pages/Signup";

const Routes = () => {
  return (
    <ReactRoutes>
      {/* public routes */}
      <Route element={<AuthorizationLayout />}>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Route>

      {/* protected routes */}
      <Route path="/" element={<MainLayout />}>
        {/* <Route element={<RequireAuthRoute />}> */}
        <Route path="/:username" element={<Profile />} />
        <Route index element={<Newsline />} />
        <Route path="/friends" element={<Friends />} />
        {/* </Route> */}
      </Route>

      <Route path="*" element={<NotFound />} />
    </ReactRoutes>
  );
};

export default Routes;

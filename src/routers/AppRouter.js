import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashBoardRoutes } from "./DashBoardRoutes";
import { PrivateReout } from "./PrivateReout";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="login" element={<LoginScreen />} /> */}

        <Route
          path="login"
          element={
            <PublicRoute>
              <LoginScreen />
            </PublicRoute>
          }
        />
        <Route
          path="/*"
          element={
            <PrivateReout>
              <DashBoardRoutes />
            </PrivateReout>
          }
        >
          {/* <Route path="/*" element={<DashBoardRoutes />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

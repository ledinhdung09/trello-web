import { createBrowserRouter } from "react-router-dom"; // Import createBrowserRouter
import Login from "~/pages/Auth/Login";
import PrivateRoute from "~/routers/PrivateRoute";
import Register from "~/pages/Auth/Register";
import ResetPassword from "~/pages/Auth/ResetPassword";
import Board from "~/pages/Boards/_id";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Board />
      </PrivateRoute>
    ),
    children: [
      {
        path: "home", // Không cần dấu "/" trước "home"
        element: (
          <PrivateRoute>
            <Board />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/resetpassword",
    element: <ResetPassword />,
  },
]);

export default router;

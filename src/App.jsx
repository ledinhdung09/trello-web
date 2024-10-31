import { RouterProvider } from "react-router-dom";
import router from "./routers/router";
import { AuthProvider } from "./pages/Auth/AuthContext";

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;

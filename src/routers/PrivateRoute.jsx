import { Navigate } from "react-router-dom";
import { useAuth } from "~/pages/Auth/AuthContext";

function PrivateRoute({ children }) {
  const { isAuthenticated } = useAuth();
  // Kiểm tra giá trị của `isAuthenticated`
  if (!isAuthenticated) {
    // Nếu chưa đăng nhập, chuyển hướng đến trang đăng nhập
    return <Navigate to="/login" />;
  }

  // Nếu đã đăng nhập, cho phép truy cập
  return children;
}

export default PrivateRoute;

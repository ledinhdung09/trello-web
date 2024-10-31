import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    // Kiểm tra trạng thái đăng nhập từ LocalStorage hoặc API
    const token = localStorage.getItem("authToken"); // Ví dụ dùng token để xác thực
    console.log(token);
    setIsAuthenticated(!!token);
  }, []);

  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem("authToken", "example-token"); // Lưu token vào LocalStorage
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("authToken"); // Xóa token khi đăng xuất
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

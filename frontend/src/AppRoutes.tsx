import { Navigate, Route, Routes } from "react-router";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<span>Home Page</span>} />
      <Route path="/user-profile" element={<span>User Profile Page</span>} />
      <Route
        path="*"
        element={
          <span>
            <Navigate to="/" />
          </span>
        }
      />
    </Routes>
  );
};

export default AppRoutes;

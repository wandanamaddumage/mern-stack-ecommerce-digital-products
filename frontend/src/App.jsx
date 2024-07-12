/* eslint-disable no-unused-vars */
import { Routes, Route, useLocation } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoutes";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import EditProduct from "./pages/EditProduct";
import DeleteProduct from "./pages/DeleteProduct";
import CreateProduct from "./pages/CreateProduct";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute>
              <AdminRoutes />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Admin />} />
      <Route path="/product/create" element={<CreateProduct />} />
      <Route path="/product/edit/:id" element={<EditProduct />} />
      <Route path="/product/delete/:id" element={<DeleteProduct />} />
    </Routes>
  );
};

export default App;

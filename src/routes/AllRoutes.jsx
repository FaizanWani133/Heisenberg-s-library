import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import PublicRoutes from "./PublicRoutes";
import ProtectedRoute from "./ProtectedRoutes";
import Students from "../pages/Students";
import HallManagement from "../pages/HallManagement";
import Layout from "../components/Layout";
import LandingPage from "../pages/LandingPage";
import Inquiries from "../pages/Inquiries";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<PublicRoutes />}>
        <Route index element={<LandingPage />} />
      </Route>
      <Route path="/admin" element={<ProtectedRoute />}>
        <Route element={<Layout />}>
          <Route index element={<Dashboard />}></Route>
          <Route path="/admin/students" element={<Students />}></Route>
          <Route path="/admin/hall" element={<HallManagement />}></Route>
          <Route path="/admin/inquiries" element={<Inquiries />}></Route>
        </Route>
      </Route>
    </>
  )
);

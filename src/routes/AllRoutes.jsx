import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import PublicRoutes from "./PublicRoutes";
import ProtectedRoute from "./ProtectedRoutes";
import Students from "../pages/Students";
import HallManagement from "../pages/HallManagement";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<PublicRoutes />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/admin" element={<ProtectedRoute />}>
        {/* <Route index element={<Dashboard />} /> */}
        <Route path="/admin/students" element={<Students />}></Route>
        <Route path="/admin/hall" element={<HallManagement />}></Route>

        {/* <Route path="/admin/orders" element={<Orders />} />
          <Route path="/admin/restaurants/:id" element={<RestaurantPage />}>
            <Route index element={<RestaurantForm />} />
            <Route path="/admin/restaurants/:id/menu" element={<MenuPage />} />
            <Route
              path="/admin/restaurants/:id/config"
              element={<RestaurantConfig />}
            />
            <Route
              path="/admin/restaurants/:id/address"
              element={<SellerAddress />}
            />
          </Route>
          <Route path="/admin/drivers" element={<Drivers />} />
          <Route path="/admin/drivers/:id" element={<DriverPage />}></Route>
          <Route path="/admin/promotions" element={<Promotions />} />
          <Route
            path="/admin/restaurants/create/new"
            element={<CreateSeller />}
          /> */}
      </Route>
    </>
  )
);

// import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/AllRoutes";
import { AuthProvider } from "./provider/AuthContext";

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;

// import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/AllRoutes";
import { AuthProvider } from "./provider/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;

import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import AuthLayout from "./components/Layout/AuthLayout";
import Login from "./pages/auth/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import AuthContextProvider from "./context/AuthContextProvider";
import { ThemeProvider } from "./context/ThemeProvider";
import { Toaster } from "sonner";
import DashboardLayout from "./components/Layout/DashboardLayout";

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            {/* Root Redirect */}
            <Route path="/" element={<Navigate to="/login" replace />} />

            {/* Auth Pages */}
            <Route element={<AuthLayout />}>
              <Route path="/login" element={<Login />} />
            </Route>

            {/* Protected Pages */}
            <Route element={<DashboardLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
      <Toaster position="top-center" richColors />
    </ThemeProvider>
  );
}

export default App;

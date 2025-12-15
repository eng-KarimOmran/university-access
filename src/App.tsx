import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import AuthLayout from "./components/Layout/AuthLayout";
import Login from "./pages/auth/Login";
import AuthContextProvider from "./context/AuthContextProvider";
import { ThemeProvider } from "./context/ThemeProvider";
import { Toaster } from "sonner";
import DashboardLayout from "./components/Layout/DashboardLayout";
import NotFound from "./pages/not-found/not-found";
import DashboardOverview from "./pages/dashboard-overview/dashboard-overview";
import StudentsManagement from "./pages/students-management/students-management";
import GateAccessLogs from "./pages/gate-access-logs/gate-access-logs";

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
              <Route path="/dashboard" element={<DashboardOverview />} />
              <Route path="/students-management" element={<StudentsManagement />}/>
              <Route path="/gate-access-logs" element={<GateAccessLogs />} />
            </Route>

            {/* not found Page */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
      <Toaster position="top-center" richColors />
    </ThemeProvider>
  );
}

export default App;

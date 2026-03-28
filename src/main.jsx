// main.jsx
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardWrapper";
import "./index.css";



import Home from "./pages/Home/DashBoard";
import VendoresAndPurchases from "./pages/VendoresAndPurchases/VendoresAndPurchases";
import BillingAndInvoice from "./pages/BillingAndInvoice/BillingAndInvoice";
import InventoryAndServices from "./pages/InventoryAndServices/InventoryAndServices";
import Banking from "./pages/Banking/Banking";
import Expenses from "./pages/Expenses/Expenses";
import Setting from "./pages/Settings/Setting";
import Reports from "./pages/Reports/Reports";

function MainApp() {
  
  return (
    
      <BrowserRouter>

        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />

        <Routes>

          {/* ✅ ALWAYS REDIRECT TO DASHBOARD */}
          <Route
            path="/"
            element={<Navigate to="/dashboard" />}
          />

          {/* ✅ REMOVE PROTECTED LOGIC (direct layout) */}
          <Route element={<DashboardLayout />}>
            
            <Route path="/dashboard" element={<Home />} />

            <Route
              path="/orders"
              element={<BillingAndInvoice />}
            />

            <Route
              path="/message"
              element={<InventoryAndServices />}
            />

            <Route
              path="/products"
              element={<VendoresAndPurchases />}
            />

            <Route
              path="/reports"
              element={<Banking />}
            />

            <Route
              path="/marketplace"
              element={<Expenses />}
            />
{/* 
            <Route
              path="/reports"
              element={<Reports />}
            /> */}
{/* 
            <Route
              path="/settings"
              element={<Setting />}
            /> */}

          </Route>

          {/* ✅ fallback */}
          <Route path="*" element={<Navigate to="/dashboard" />} />

        </Routes>
      </BrowserRouter>
    
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<MainApp />);
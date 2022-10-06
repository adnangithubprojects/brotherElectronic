import { Route, Routes } from "react-router";
import "./App.css";
import Sidebar from "./panel/component/Sidebar";
import ActiveCustomer from "./panel/pages/ActiveCustomer";
import AddCustomer from "./panel/pages/AddCustomer";
import Allcustomer from "./panel/pages/Allcustomer";
import Clientform from "./panel/pages/Clientform";
import CustomerDetail from "./panel/pages/CustomerDetail";
import Dashboard from "./panel/pages/Dashboard";
import DownlaodCustomer from "./panel/pages/DownloadCustomer";
import PendingCustomer from "./panel/pages/PendingCustomer";
import RevenueMain from "./panel/pages/RevenueMain";
import Setting from "./panel/pages/Setting";
import User from "./panel/pages/User";
import Signin from "./panel/user/Signin";
import Signup from "./panel/user/Signup";
import RouteProtection from "./RouteProtection";

function App() {
  return (
    <div className="flex">
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/dashboard"
          element={
            <RouteProtection>
              <div className="flex">
                <Sidebar />
                <Dashboard />
              </div>
            </RouteProtection>
          }
        />
        <Route
          path="/AddCustomer"
          element={
            <RouteProtection>
              <div className="flex">
                <Sidebar />
                <Clientform />
              </div>
            </RouteProtection>
          }
        />
        <Route
          path="/AllCustomer"
          element={
            <RouteProtection>
              <div className="flex">
                <Sidebar />
                <Allcustomer />
              </div>
            </RouteProtection>
          }
        />
        <Route
          path="/ActiveCustomer"
          element={
            <RouteProtection>
              <div className="flex">
                <Sidebar />
                <ActiveCustomer />
              </div>
            </RouteProtection>
          }
        />
        <Route
          path="/PendingCustomer"
          element={
            <RouteProtection>
              <div className="flex">
                <Sidebar />
                <PendingCustomer />
              </div>
            </RouteProtection>
          }
        />
        <Route
          path="/downloadcustomer"
          element={
            <RouteProtection>
              <div className="flex">
                <Sidebar />
                <DownlaodCustomer />
              </div>
            </RouteProtection>
          }
        />
        <Route
          path="/addustomer"
          element={
            <RouteProtection>
              <div className="flex">
                <AddCustomer />
              </div>
            </RouteProtection>
          }
        />
        <Route
          path="/revenuemain"
          element={
            <RouteProtection>
              <div className="flex">
                <Sidebar />
                <RevenueMain />
              </div>
            </RouteProtection>
          }
        />
        <Route
          path="/CustomerDetail"
          element={
            <RouteProtection>
              <div className="flex">
                <Sidebar />
                <CustomerDetail />
              </div>
            </RouteProtection>
          }
        />
        <Route
          path="/user"
          element={
            <RouteProtection>
              <div className="flex">
                <Sidebar />
                <User />
              </div>
            </RouteProtection>
          }
        />
        <Route
          path="/setting"
          element={
            <RouteProtection>
              <div className="flex">
                <Sidebar />
                <Setting />
              </div>
            </RouteProtection>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

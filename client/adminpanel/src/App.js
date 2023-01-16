import { Route, Routes } from "react-router";
import "./App.css";
import Sidebar from "./panel/component/Sidebar";
import ActiveCustomer from "./panel/pages/ActiveCustomer";
import ActiveDetail from "./panel/pages/ActiveDetail";
import AddCustomer from "./panel/pages/AddCustomer";
import Allcustomer from "./panel/pages/Allcustomer";
import AllReciept from "./panel/pages/AllReciept";
import Clientform from "./panel/pages/Clientform";
import CustomerDetail from "./panel/pages/CustomerDetail";
import Dashboard from "./panel/pages/Dashboard";
import DownlaodCustomer from "./panel/pages/DownloadCustomer";
import PendingCustomer from "./panel/pages/PendingCustomer";
import PendingDetail from "./panel/pages/PendingDetail";
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
        <Route
          path="/signup"
          element={
            <RouteProtection>
              <div className=" flex flex-col md:flex-row">
                <Sidebar />
                <Signup />
              </div>
            </RouteProtection>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RouteProtection>
              <div className="flex flex-col md:flex-row w-screen">
                <Sidebar />
                <Dashboard />
              </div>
            </RouteProtection>
          }
        />
        {/* <Route
          path="/AddCustomer"
          element={
            <RouteProtection>
              <div className="flex flex-col md:flex-row">
                <Sidebar />
                <Clientform />
              </div>
            </RouteProtection>
          }
        /> */}
        <Route
          path="/AllCustomer"
          element={
            <RouteProtection>
              <div className="flex flex-col md:flex-row w-screen">
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
              <div className="flex flex-col md:flex-row w-screen">
                <Sidebar />
                <ActiveDetail />
              </div>
            </RouteProtection>
          }
        />
        <Route
          path="/PendingCustomer"
          element={
            <RouteProtection>
              <div className="flex flex-col md:flex-row w-screen">
                <Sidebar />
                <PendingDetail />
              </div>
            </RouteProtection>
          }
        />
        <Route
          path="/downloadcustomer"
          element={
            <RouteProtection>
              <div className="flex flex-col md:flex-row">
                <Sidebar />
                <DownlaodCustomer />
              </div>
            </RouteProtection>
          }
        />
        <Route
          path="/addcustomer"
          element={
            <RouteProtection>
              <div className="flex">
                <AddCustomer />
              </div>
            </RouteProtection>
          }
        />
        <Route
          path="/allreciept"
          element={
            <RouteProtection>
              <div className="flex flex-col md:flex-row">
                <Sidebar />

                <AllReciept />
              </div>
            </RouteProtection>
          }
        />
        <Route
          path="/revenuemain"
          element={
            <RouteProtection>
              <div className="flex flex-col md:flex-row">
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
              <div className="flex flex-col md:flex-row">
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
              <div className="flex flex-col lg:flex-row">
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
              <div className="flex flex-col lg:flex-row">
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

// import React, { useState } from "react";

// export default function App() {
//   return (
//     <div>
//       <Routes>
//         <Route path="/" element={<Checking />} />
//       </Routes>
//     </div>
//   );
// }

// var data = [
//   {
//     accountNo: 1,
//     name: "ali",
//   },
//   {
//     accountNo: 2,
//     name: "alii",
//   },
//   {
//     accountNo: 3,
//     name: "suliman",
//   },
//   {
//     accountNo: 303,
//     name: "sulklssfjfkliman",
//   },
// ];
// function Checking() {
//   const [search, setSearch] = useState("");
//   const [dataa, setDataa] = useState(data);
//   // ?.filter((fil) => {
//   //   if (search == 0) {
//   //     return fil;
//   //   } else if (fil?.accountNo.includes(search)) {
//   //     return fil?.accountNo;
//   //   }
//   // })
//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search with Name"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         className="outline-none py-2 rounded mt-1 px-3 border-2 border-blue-500 focus:border-indigo-700"
//       />
//       hallos
//       {dataa
//         .filter((fil) => {
//           if (search == 0 || search == "") {
//             return fil;
//           } else if (fil.accountNo == search) {
//             return fil.accountNo;
//           }
//         })
//         .map((data, index) => {
//           return (
//             <>
//               <div className="flex">
//                 <p>{data.accountNo}</p>
//                 <p>{data.name}</p>
//               </div>
//             </>
//           );
//         })}
//     </div>
//   );
// }

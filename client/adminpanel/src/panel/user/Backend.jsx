// import React, { useState, useEffect } from "react";
// import { NavLink, Link } from "react-router-dom";
// import axios from "axios";

// export default function Backend() {
//   const [data, setData] = useState({});
//   const reload = () => {
//     axios
//       .get("http://localhost:9000/panel")
//       .then((res) => {
//         setData(res.data);
//         console.log(res.data[0]);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
//   useEffect(() => {
//     reload();
//   }, []);
//   return (
//     <div className=" h-screen   flex flex-col justify-between items-center   ">
//       {data.map((dataa, index) => {
//         return <p key={index}>{dataa.name}</p>;
//       })}
//     </div>
//   );
// }

import React from "react";

export default function extra() {
  let dates = [
    { id: 1, dt: "12" },
    { id: 2, dt: "22" },
    { id: 3, dt: "4" },
    { id: 4, dt: "19" },
    { id: 5, dt: "22" },
  ];
  let curntDate = "4";
  let newDate = [];

  return (
    <div>
      {dates.map((it) => {
        if (curntDate == it.dt) {
          newDate.push(it.dt);
        }
      })}
    </div>
  );
}

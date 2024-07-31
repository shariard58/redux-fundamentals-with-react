import React from "react";

export default function Stats({ count }) {
  console.log("Count from the app.jsx", count);
  const total = count.reduce((inital, current) => inital + current.count, 0);
  console.log("The total is", total);
  return (
    <div className="p-4 h-40 flex flex-col items-center justify-center space-y-5 bg-white rounded shadow mt-[30px]">
      <div className="text-2xl font-semibold"> Total Count : {total} </div>
    </div>
  );
}

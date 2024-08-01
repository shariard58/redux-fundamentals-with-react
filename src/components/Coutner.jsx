import React from "react";
import { useState } from "react";

export default function Coutner() {
  const [count, setCount] = useState(0);
  return (
    <div className="max-w-md mx-auto mt-10 space-y-5">
      <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
        <div className="text-2xl font-semibold">{count}</div>
        <div className="flex space-x-3">
          <button
            onClick={() => {
              setCount((prev) => prev + 1);
            }}
            className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
          >
            Increment
          </button>
          <button
            onClick={() => {
              setCount((prev) => prev - 1);
            }}
            className="bg-red-400 text-white px-3 py-2 rounded shadow"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

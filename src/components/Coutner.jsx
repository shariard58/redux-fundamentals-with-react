import React from "react";

export default function Coutner({ count, incrementCount, decrementCount }) {
  return (
    <div className="max-w-md mx-auto mt-10 space-y-5">
      <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
        <div className="text-2xl font-semibold">{count.count}</div>
        <div className="flex space-x-3">
          <button
            onClick={() => {
              incrementCount(count.id);
            }}
            className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
          >
            Increment
          </button>
          <button
            onClick={() => {
              decrementCount(count.id);
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

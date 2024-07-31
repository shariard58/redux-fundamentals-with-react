import React from "react";

export default function Button({ label, handler }) {
  return (
    <button
      onClick={handler}
      className={`bg-indigo-400 text-white px-3 py-2 rounded shadow ${
        label === "Increment" ? "bg-indigo-400" : "bg-red-400"
      }`}
    >
      {label}
    </button>
  );
}

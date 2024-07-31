import React from "react";
import Button from "./Button";
export default function Coutner({ count, incrementCount, decrementCount }) {
  return (
    <div className="max-w-md mx-auto mt-10 space-y-5">
      <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
        <div className="text-2xl font-semibold">{count.count}</div>
        <div className="flex space-x-3">
          <Button label="Increment" handler={() => incrementCount(count.id)} />
          <Button label="Decrement" handler={() => decrementCount(count.id)} />
        </div>
      </div>
    </div>
  );
}

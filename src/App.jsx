import Coutner from "./components/Coutner";
import Stats from "./components/Stats";
import { useState } from "react";
export default function App() {
  const [count, setCount] = useState([
    {
      id: 0,
      count: 4,
    },

    {
      id: 1,
      count: 5,
    },
  ]);

  const incrementCount = (counterNumber) => {
    setCount((prevCount) =>
      prevCount.map((item) =>
        item.id === counterNumber ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const decrementCount = (counterNumber) => {
    setCount((prevCount) =>
      prevCount.map((item) =>
        item.id === counterNumber ? { ...item, count: item.count - 1 } : item
      )
    );
  };

  return (
    <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
      <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
        Simple Counter Application
      </h1>
      <div className="max-w-md mx-auto mt-10 spacy-y-5">
        {count.map((singleCount) => (
          <Coutner
            key={singleCount.id}
            count={singleCount}
            incrementCount={incrementCount}
            decrementCount={decrementCount}
          />
        ))}

        <Stats count={count} />
      </div>
    </div>
  );
}

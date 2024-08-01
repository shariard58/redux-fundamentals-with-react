import { Provider } from "react-redux";
import Coutner from "./components/Coutner";
import store from "./redux/store";
export default function App() {
  return (
    <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
      <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
        Simple Counter Application
      </h1>
      <div className="max-w-md mx-auto mt-10 spacy-y-5">
        <Provider store={store}>
          <Coutner />
        </Provider>
      </div>
    </div>
  );
}

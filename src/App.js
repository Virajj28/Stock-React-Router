import "./App.css";
import { Routes, Route } from "react-router-dom";
import Criteria from "./components/Criteria";
import Data from "./components/Data";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/page" element={<Data />} />
        <Route path="/page/:name" element={<Criteria />} />
      </Routes>
    </div>
  );
}

export default App;

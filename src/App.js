import "./App.css";
import axios from "axios";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Data from "./components/Criteria";

const Dummy = () => {
  const [data, setData] = useState([]);

  const navigate = useNavigate();
  
  const getData = async () => {
    const response = await axios.get(
      "https://mobile-app-challenge.herokuapp.com/data"
    );
    const id = [];
    response.data.map((res) => {
      return id.push(res.id);
    });
    setData(response.data);
  };

  const handleClick = (data) => {
    navigate(
      `/page/${data.name.split(" ").splice(0, 2).join("_").toLowerCase()}`,
      {
        state: { data }
      }
    );
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {data.map((data) => (
        <div
          key={data.id}
          onClick={() => {
            handleClick(data);
          }}
        >
          {data.name}
        </div>
      ))}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/page/:name" element={<Data />} />
        <Route path="/page" element={<Dummy />} />
      </Routes>
    </div>
  );
}

export default App;

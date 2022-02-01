import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Data = () => {
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
          <div className="card-item">
          <div
            className="card-item-header"
            key={data.id}
            onClick={() => {
              handleClick(data);
            }}
          >
            {data.name}
          </div>
          <div
            style={{color: data.color}}
            className="card-item-body"
          >
            {data.tag}
          </div>
        </div>
        ))}
      </div>
    );
};

export default Data;

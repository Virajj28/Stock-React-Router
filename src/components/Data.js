import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../Context";

const Data = () => {
    const { data } = useContext(DataContext);

    const navigate = useNavigate();
  
    const handleClick = (ele) => {
      navigate(
        `/page/${ele.name.split(" ").splice(0, 2).join("_").toLowerCase()}`,
      );
    };
  
    return (
      <div>
        {data.map((ele) => (
          <div className="card-item">
          <div
            className="card-item-header"
            key={ele.id}
            onClick={() => {
              handleClick(ele);
            }}
          >
            {ele.name}
            
            <div
              style={{color: ele.color}}
              className="card-item-body"
            >
              {ele.tag}
            </div>
          </div>
        </div>
        ))}
      </div>
    );
};

export default Data;

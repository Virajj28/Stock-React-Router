import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../Context";

const Data = () => {
    const { data } = useContext(DataContext);

    const navigate = useNavigate();
  
    const handleClick = (data) => {
      navigate(
        `/page/${data.name.split(" ").splice(0, 2).join("_").toLowerCase()}`,
      );
    };
  
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

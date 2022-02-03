import { useParams } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../Context";
import SubCriteria from "./SubCriteria"

const Criteria = () => {
  const params = useParams();
  const { data } = useContext(DataContext);
  let singleData = null;
  // console.log(params, data);
  
  data.map((ele) => {
    if (
      ele.name
        .split(" ")
        .splice(0, 2)
        .join("_")
        .toLowerCase()
        .includes(params.name)
    ) {
      singleData = ele;
    }
    return ele;
  });

  if (!singleData) {
    return null;
  }

  return (
    <>
      <div className="card-item">{singleData.name}</div>
      {singleData.criteria.map((cr, idx) => (
        <div className="card-criteria">
          <SubCriteria key={idx} cr={cr} className="card-criteria"/>
        </div>
      ))}
    </>
  );
};

export default Criteria;
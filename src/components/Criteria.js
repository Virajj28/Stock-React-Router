import { useParams } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../Context";

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
        <div key={idx} className="card-criteria">
          {cr.text}
        </div>
      ))}
    </>
  );
};

export default Criteria;
import { useLocation } from "react-router-dom";

const Criteria = () => {
  let { state } = useLocation();
  const { data } = state;
  // console.log(data);

  return (
    <>
      <div className="card-item">{data.name}</div>
      {data.criteria.map((cr, idx) => (
        <div key={idx} className="card-criteria">
          {cr.text}
        </div>
      ))}
    </>
  );
};

export default Criteria;
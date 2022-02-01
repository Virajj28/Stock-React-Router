import { useLocation } from "react-router-dom";

const Data = () => {
  let { state } = useLocation();
  const { data } = state;
  // console.log(data);

  return (
    <>
      <div>{data.name}</div>
       <hr/>
      {data.criteria.map((cr, idx) => (
        <div key={idx}>{cr.text}
        </div>
      ))}
    </>
  );
};

export default Data;
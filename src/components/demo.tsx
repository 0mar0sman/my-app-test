import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDemo } from "../redux/demo/actions";
import { RootState } from "../redux/rootReducer";

const Demo = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllDemo());
  }, [dispatch]);

  const data = useSelector((state: RootState) => state.demo.one.id);
  const [demo, setdemo] = useState(data);
  console.log(demo);

  return (
    <div>
      test
      <div key={data}>{demo}</div>
    </div>
  );
};
export default Demo;

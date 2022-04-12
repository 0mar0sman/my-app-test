import React, { useState, useEffect } from "react";
import { fetchOwner } from "./service/owner";

const OwnerPage: React.FC = () => {
  //const [owner, setOwner] = useState<Owner>();

  useEffect(() => {
    const fetchData = async () => {
      // Here we get users: User[]
      // const owners = await fetchOwner();
      // setOwner(owners);
    };

    fetchData();
  }, []);

  return <div></div>;
};
export default OwnerPage;

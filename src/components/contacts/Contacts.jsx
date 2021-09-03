import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getData } from "../../store/contacts/actions";
import AddContact from "./AddContact";

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  const data = useSelector((state) => state);
  console.log(data);

  return (
    <div style={{ margin: "10px 0px" }}>
      <AddContact />
    </div>
  );
};

export default Contacts;

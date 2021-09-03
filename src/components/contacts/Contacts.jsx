import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getData } from "../../store/contacts/actions";
import AddContact from "./AddContact";
import SearchComponent from "./SearchComponent";

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <div
      style={{
        margin: "10px 0px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <AddContact />
      <SearchComponent />
    </div>
  );
};

export default Contacts;

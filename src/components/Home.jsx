/* eslint-disable no-unused-vars */
import React from "react";
import app from "../base/firebaseIndex";
import { Button } from "antd";
import RandM from "./RandM";
import Contacts from "./contacts/Contacts";
import ContactList from "./contacts/ContactList";

const Home = () => {
  return (
    <div style={{ padding: "10px", backgroundColor: "#bfbfbf" }}>
      <Button onClick={() => app.auth().signOut()} type="primary">
        Выйти
      </Button>
      {/* <RandM /> */}
      <Contacts />
      <ContactList />
    </div>
  );
};

export default Home;

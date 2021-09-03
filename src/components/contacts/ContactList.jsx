/* eslint-disable react/display-name */
/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";
import { Table, Tag, Space } from "antd";
import { useDispatch } from "react-redux";

export default function ContactList() {
  const data = useSelector((state) => {
    return state.contacts;
  });

  const handleDeleteContact = () => {

  }

  const columns = [
    { title: "Имя", dataIndex: "name", key: "name" },
    { title: "Адресс", dataIndex: "location", key: "location" },
    { title: "Номе телефона", dataIndex: "phoneNumber", key: "phoneNumber" },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: () => <a onClick={handleDeleteContact}>Delete</a>,
    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}

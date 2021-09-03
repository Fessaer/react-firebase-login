import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Table } from "antd";
import { useDispatch } from "react-redux";
import { deleteData, changeData } from "../../store/contacts/actions";
import { Modal, notification, Input } from "antd";

export default function ContactList() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [state, setState] = useState({
    name: "",
    location: "",
    phoneNumber: "",
  });
  const [disabledButton, setDisableButton] = useState(true);

  useEffect(() => {
    if (
      state.name === "" ||
      state.location === "" ||
      state.phoneNumber === ""
    ) {
      setDisableButton(true);
    } else {
      setDisableButton(false);
    }
  }, [state]);

  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.contacts;
  });

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    dispatch(changeData(state, state.id));
    openNotificationWithIcon("success");
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleDeleteContact = (item) => () => {
    dispatch(deleteData(data, item.id));
    openNotificationWithIconDel("warning", item);
  };

  const handleChange = (item) => () => {
    showModal();
    setState(item);
  };

  const handleName = (e) => {
    console.log(state);
    setState((prev) => ({ ...prev, name: e.target.value }));
  };
  const handleLocation = (e) => {
    setState((prev) => ({ ...prev, location: e.target.value }));
  };

  const handlePhoneNumber = (e) => {
    setState((prev) => ({ ...prev, phoneNumber: e.target.value }));
  };

  const openNotificationWithIcon = (type) => {
    notification[type]({
      description: `Контакт "${state.name}" изменён.`,
    });
  };
  const openNotificationWithIconDel = (type, item) => {
    notification[type]({
      description: `Контакт "${item.name}" удалён.`,
    });
  };

  const columns = [
    { title: "Имя", dataIndex: "name", key: "id" },
    { title: "Адресс", dataIndex: "location", key: "id" },
    { title: "Номе телефона", dataIndex: "phoneNumber", key: "id" },
    {
      title: "Действие",
      dataIndex: "",
      key: "id",
      render: (item) => (
        <>
          <a style={{ marginRight: "10px" }} onClick={handleChange(item)}>
            Изменить
          </a>
          <a onClick={handleDeleteContact(item)}>Удалить</a>
        </>
      ),
    },
  ];

  return (
    <div>
      <Modal
        title="Новый контакт"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        destroyOnClose={true}
        okButtonProps={{ disabled: disabledButton }}
      >
        <Input
          onChange={handleName}
          value={state.name}
          placeholder="Введите имя"
          style={{ marginBottom: 10 }}
        />

        <Input
          onChange={handleLocation}
          value={state.location}
          placeholder="Введите адрес"
          style={{ marginBottom: 10 }}
        />
        <Input
          onChange={handlePhoneNumber}
          placeholder="Номер телефона"
          value={state.phoneNumber}
        />
      </Modal>
      <Table
        columns={columns}
        dataSource={data}
        rowKey={(item) => item.id}
        pagination={false}
      />
    </div>
  );
}

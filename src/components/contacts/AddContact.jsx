/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Modal, Button, notification, Input } from "antd";
import { setData } from "../../store/contacts/actions";
import { useDispatch } from "react-redux";

const AddContact = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [state, setState] = useState({
    name: "",
    location: "",
    phoneNumber: "",
  });
  const [disabledButton, setDisableButton] = useState(true);

  useEffect(() => {
    if (
      state.name !== "" &&
      state.location !== "" &&
      state.phoneNumber !== ""
    ) {
      setDisableButton(false);
    }
  }, [state]);

  const dispatch = useDispatch();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    openNotificationWithIcon("success");
    if (
      state.name !== "" &&
      state.location !== "" &&
      state.phoneNumber !== ""
    ) {
      dispatch(setData(state));
    }
    setState({ name: "", location: "", phoneNumber: "" });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleName = (e) => {
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
      description: `Контакт "${state.name}" добавлен.`,
    });
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Добавить контакт
      </Button>
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
          placeholder="Введите имя"
          style={{ marginBottom: 10 }}
        />

        <Input
          onChange={handleLocation}
          placeholder="Введите адрес"
          style={{ marginBottom: 10 }}
        />
        <Input onChange={handlePhoneNumber} placeholder="Номер телефона" />
      </Modal>
    </>
  );
};

export default AddContact;

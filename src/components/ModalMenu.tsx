import React, { useState, FC } from "react";
import { Button, Modal } from "antd";
import LoginForm from "./LoginForm";

interface componentProps {
  isModalOpen: boolean;
  setModalOpen: (state: boolean) => void;
}

const ModalMenu: FC<componentProps> = (props) => {
  return (
    <Modal
      title="Login"
      centered
      open={props.isModalOpen}
      footer={null}
      onOk={() => props.setModalOpen(false)}
      onCancel={() => props.setModalOpen(false)}
    >
      <LoginForm />
    </Modal>
  );
};

export default ModalMenu;

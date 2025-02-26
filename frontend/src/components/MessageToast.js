import React from "react";
import { Toast } from "react-bootstrap";

function MessageToast({ show, onClose, message }) {
  return (
    <Toast
      show={show}
      onClose={onClose}
      delay={3000}
      autohide
      style={{
        position: "fixed",
        top: 20,
        right: 20,
        zIndex: 9999,
      }}
    >
      <Toast.Header closeButton={false} className="bg-success text-white">
        <strong className="me-auto">Product added to Cart</strong>
      </Toast.Header>
      <Toast.Body>{message}</Toast.Body>
    </Toast>
  );
}

export default MessageToast;

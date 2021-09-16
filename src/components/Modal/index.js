import React from "react";
import { Container, ModalBody } from "./styled";

export default ({ children, status, setStatus }) => {
  function handleClick(e) {
    //e.target onde/quem foi clicado
    if (e.target.classList.contains("modalBg")) {
      setStatus(false);
    }
  }

  return (
    <Container className="modalBg" onClick={handleClick} status={status}>
      <ModalBody>{children}</ModalBody>
    </Container>
  );
};

import styled from "styled-components";

export const Container = styled.div`
  display: ${(props) => (props.status ? "flex" : "none")};
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 900;
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.div`
  background: radial-gradient(
    at left center,
    rgb(40, 40, 50) 40%,
    rgb(28, 27, 33) 85%
  );
  border-radius: 30px;
  box-shadow: 0px, 0px 50px black;
  max-height: 90vh;
  max-width: 100vw;
  overflow: auto;
  color: white;
`;

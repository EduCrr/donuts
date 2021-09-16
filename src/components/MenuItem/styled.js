import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all ease 0.7s;
`;
export const LinkArea = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: ${(props) => (props.active ? "#ed4a63" : "#2f2e3a")};
  border-radius: 25px;
  margin-bottom: 10px;
  transition: all ease 0.3s;
  &:hover {
    background-color: #ed4a63;
  }
`;

export const LinkIcon = styled.img`
  width: 25px;
  height: auto;
  transition: all ease 0.7s;
`;

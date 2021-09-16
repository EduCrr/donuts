import styled from "styled-components";

export const SearchInput = styled.input`
  border: 0;
  border-radius: 25px;
  width: 300px;
  height: 50px;
  background-color: #1c1b21;
  background-image: url("/assets/lupa.png");
  background-size: 30px;
  background-repeat: no-repeat;
  background-position: right 10px bottom 10px;
  outline: 0;
  padding: 10px;
  transition: all ease 0.6s;
  cursor: pointer;
  color: white;
  font-size: 15px;
  margin-top: 10px;

  &:focus {
    cursor: text;
  }
  @media (max-width: 425px) {
    width: auto;
  }
`;

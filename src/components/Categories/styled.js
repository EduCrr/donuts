import styled from "styled-components";

export const CategorieItem = styled.div`
  background: radial-gradient(
    at left center,
    rgb(40, 40, 50) 40%,
    rgb(28, 27, 33) 85%
  );
  height: auto;
  width: 120px;
  display: flex;
  border-radius: 30px;
  padding: 20px;
  align-items: center;
  flex-direction: column;
  @media (max-width: 1200px) {
    width: auto;
  }
  @media (max-width: 768px) {
    width: auto;
    margin: auto;
    margin-bottom: 20px;
  }
`;
export const CategoriePhoto = styled.div`
  img {
    height: auto;
    width: 50px;
    margin-bottom: 20px;
  }
`;
export const CategorieTitle = styled.div`
  font-weight: bold;
  cursor: pointer;
  transition: all ease 0.3s;
  color: ${(props) => (props.active === props.id ? "#136713" : "white")};
  &:hover {
    color: #136713;
  }
`;

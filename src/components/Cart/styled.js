import styled from "styled-components";

export const Container = styled.div`
  @media (max-width: 425px) {
    margin-top: 20px;
  }
`;

export const CartItem = styled.div`
  transition: all ease 0.3s;
  background-color: #ed4a63;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  margin-top: 10px;

  img {
    height: 25px;
    cursor: pointer;
    width: 25px;
  }
`;
export const CartArea = styled.div`
  display: flex;
  span {
    background-color: #ed4a63;
    width: 20px;
    display: flex;
    justify-content: center;
    height: 20px;
    border-radius: 25px;
  }
`;

export const CartBody = styled.div`
  transition: all ease 0.3s;
  border-top-left-radius: 80px;
  height: 100vh;
  width: 35vw;
  padding: 50px;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
  position: fixed;
  background-color: #1c1b21;
  a {
    border: 0;
    cursor: pointer;
    font-size: 30px;
  }
  @media (max-width: 1024px) {
    width: 100%;
    border-top-left-radius: 0px;
  }
`;
export const ProductsArea = styled.div`
  margin-top: 30px;
`;
export const ProductItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  @media (max-width: 425px) {
    flex-direction: column;
  }
`;
export const ProductPhoto = styled.img`
  width: 130px;
  border-radius: 20px;
  height: auto;
  @media (max-width: 425px) {
    margin-bottom: 10px;
  }
`;
export const ProductInfoArea = styled.div`
  flex: 1;
  margin-left: 10px;
`;
export const ProductName = styled.div`
  font-size: 17px;
  font-weight: bold;
`;
export const ProductPrice = styled.div`
  font-size: 13px;
  @media (max-width: 425px) {
    text-align: center;
    margin-bottom: 10px;
    margin-top: 10px;
  }
`;
export const ProductQt = styled.div`
  display: flex;
  align-items: center;
`;
export const ProductQtIcon = styled.img`
  height: auto;
  width: 15px;
  cursor: pointer;
`;
export const ProductQtText = styled.div`
  font-weight: bold;
  margin: 0px 5px;
`;

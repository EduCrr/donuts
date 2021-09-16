import styled from "styled-components";

export const Container = styled.div`
  width: 700px;
  padding: 20px;
  transition: all ease 0.3s;
  @media (max-width: 725px) {
    width: 100vw;
  }
`;
export const ProductArea = styled.div`
  display: flex;
  @media (max-width: 725px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const ProductPhoto = styled.img`
  width: 310px;
  border-radius: 30px;
  @media (max-width: 725px) {
    margin-bottom: 20px;
  }
`;
export const ProductInfoArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 20px;
`;
export const ProductDetails = styled.div``;

export const ProductQtdArea = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProductQtd = styled.div`
  display: flex;
  align-items: center;
  background: radial-gradient(
    at right center,
    rgb(98, 206, 96) 50%,
    rgb(11 103 11) 95%
  );
  border-radius: 15px;
  @media (max-width: 725px) {
    margin-top: 20px;
    width: 100px;
  }
`;
export const ProductQtImg = styled.img`
  width: 20px;
  margin-left: 10px;
  margin-right: 10px;
  height: auto;
  cursor: pointer;
`;
export const ProductText = styled.div`
  font-size: 25px;
  font-weight: bold;
  color: white;
`;

export const ProductPrice = styled.div`
  font-weight: bold;
  font-size: 30px;
  @media (max-width: 725px) {
    margin-top: 20px;
  }
`;

export const ProductButtons = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 725px) {
    flex-direction: column;
  }
`;
export const ProductIng = styled.div`
  font-size: 14px;
`;
export const ProductName = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

export const ProductBotton = styled.button`
  border: 0;
  background: radial-gradient(
    at right center,
    rgb(98, 206, 96) 50%,
    rgb(11 103 11) 95%
  );
  color: white;
  font-size: ${(props) => (props.small ? "14px" : "22px")};
  font-weight: bold;
  padding: ${(props) => (props.small ? "13px 20px" : "10px 20px")};
  margin-left: 10px;
  cursor: pointer;
  border-radius: 15px;
  @media (max-width: 725px) {
    margin-bottom: 20px;
  }
`;

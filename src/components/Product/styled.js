import styled from "styled-components";

export const Container = styled.div`
  margin-top: 40px;
  margin-bottom: 30px;
`;

export const ProductArea = styled.div`
  background: radial-gradient(
    at left center,
    rgb(40, 40, 50) 40%,
    rgb(28, 27, 33) 85%
  );
  padding: 17px;
  height: 200px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  p {
    font-size: 13px;
    color: #7b7a81;
  }
`;
export const ProductPhoto = styled.img`
  height: auto;
  width: 150px;
  border-radius: 30px;
  margin-bottom: 20px;
  margin-top: -45px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`;
export const ProductPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ProductButton = styled.img`
  height: 35px;
  width: 35px;
  background: radial-gradient(
    at left center,
    rgb(98, 206, 96) 50%,
    rgb(11 103 11) 95%
  );
  cursor: pointer;
  border-radius: 30px;
  padding: 10px;
`;

export const ProductAreaPhoto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

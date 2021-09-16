import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 15px;
  h1 {
    font-size: 25px;
    font-weight: bold;
  }
`;
export const PromotionalArea = styled.div`
  background: radial-gradient(
    at left center,
    rgb(40, 40, 50) 40%,
    rgb(28, 27, 33) 85%
  );
  padding: 22px 17px;
  border-radius: 30px;
  justify-content: space-between;
  display: flex;
  p {
    font-size: 13px;
    color: #7b7a81;
  }
  @media (max-width: 425px) {
    flex-direction: column;
  }
`;
export const PromotionalPhoto = styled.img`
  height: 100px;
  width: 150px;
  border-radius: 30px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  @media (max-width: 425px) {
    margin-bottom: 20px;
  }
`;
export const PromotionalText = styled.div`
  display: flex;
  flex-direction: column;
`;
export const PromotionalButton = styled.img`
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
export const PromotionalPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

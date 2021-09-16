import styled from "styled-components";

export const Container = styled.div`
  padding: 5px 30px;
  .filtro {
    display: flex;
    align-items: flex-end;
  }
  h4 {
    margin-top: 30px;
  }
  .btn-filtro {
    margin-left: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background-color: #ed4a63;
    border-radius: 50px;
    transition: all ease 0.3s;
    cursor: pointer;

    img {
      width: 25px;
      height: auto;
    }
  }
  .slick-slider {
  }
  h1 {
    margin-top: 40px;
    font-weight: bold;
    font-size: 25px;
  }
  h1.promo {
    margin-bottom: 20px;
  }
  .silderArea {
    background: radial-gradient(
      at left center,
      rgb(98, 206, 96) 50%,
      rgb(11 103 11) 95%
    );
    height: 120px !important;
    border-radius: 30px;
    display: flex !important;
    justify-content: center;
    padding-left: 10px;
    align-items: center;

    p {
      font-size: 13px;
    }
  }
  .sliderPhoto {
    img {
      height: auto;
      width: 160px;
      position: relative;
    }
  }
  @media (max-width: 1200px) {
    .silderArea {
      justify-content: space-between;
      margin-top: 30px;
    }
  }
`;
export const HeaderArea = styled.div`
  padding: 20px;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 468px) {
    flex-direction: column;
  }
`;
export const ProductPaginationArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  justify-content: flex-start;
`;

export const ProductPaginationItem = styled.div`
  background-color: ${(props) =>
    props.active === props.current ? "#ed4a63" : "#1c1b21"};
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  box-shadow: 0px 3px 6px rgb(0, 0, 0, 0.16);
  margin-right: 10px;
  cursor: pointer;
  transition: all ease 0.3s;
  &:hover {
    background-color: #ed4a63;
  }
`;

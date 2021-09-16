import React from "react";
import {
  Container,
  ProductArea,
  ProductPhoto,
  ProductPrice,
  ProductButton,
  ProductAreaPhoto,
} from "./styled";

export default ({ data, onClick }) => {
  function handleClick() {
    onClick(data);
  }
  return (
    <>
      <div className="col-md-4">
        <Container>
          <ProductArea>
            <ProductAreaPhoto>
              <ProductPhoto src={data.image} />
            </ProductAreaPhoto>
            <h6>{data.name}</h6>
            <p>{data.ingredients}</p>
            <ProductPrice>
              <h5>R$ {data.price.toFixed(2).replace(".", ",")}</h5>
              <ProductButton onClick={handleClick} src="/assets/plus.png" />
            </ProductPrice>
          </ProductArea>
        </Container>
      </div>
    </>
  );
};

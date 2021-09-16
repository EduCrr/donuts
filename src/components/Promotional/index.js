import React from "react";
import {
  Container,
  PromotionalArea,
  PromotionalPhoto,
  PromotionalText,
  PromotionalPrice,
  PromotionalButton,
} from "./styled";
export default ({ data, onClick }) => {
  function handleClick() {
    onClick(data);
  }
  return (
    <Container>
      <PromotionalArea>
        <PromotionalPhoto src={data.image} />
        <PromotionalText>
          <h6>{data.name}</h6>
          <p>{data.ingredients}</p>
          <PromotionalPrice>
            <h5>R$ {data.price.toFixed(2).replace(".", ",")}</h5>
            <PromotionalButton onClick={handleClick} src="/assets/plus.png" />
          </PromotionalPrice>
        </PromotionalText>
      </PromotionalArea>
    </Container>
  );
};

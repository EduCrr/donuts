import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  Container,
  ProductArea,
  ProductPhoto,
  ProductInfoArea,
  ProductDetails,
  ProductQtdArea,
  ProductButtons,
  ProductName,
  ProductIng,
  ProductBotton,
  ProductQtd,
  ProductPrice,
  ProductQtImg,
  ProductText,
} from "./styled";

export default ({ data, setStatus }) => {
  const dispatch = useDispatch();
  const [qt, setQt] = useState(1);
  function handleClick() {
    setStatus(false);
  }
  function handleMinus() {
    if (qt > 1) {
      setQt(qt - 1);
    }
  }
  function handlePlus() {
    setQt(qt + 1);
  }
  function handleCart() {
    //juntar as info
    //manda para o reducer
    dispatch({
      type: "ADD_PRODUCT",
      payload: {
        data,
        qt,
      },
    });
    //fechar modal
    setStatus(false);
  }
  useEffect(() => {
    setQt(1);
  }, [data]);
  return (
    <Container>
      <ProductArea>
        <ProductPhoto src={data.image} />
        <ProductInfoArea>
          <ProductDetails>
            <ProductName>{data.name}</ProductName>
            <ProductIng>{data.ingredients}</ProductIng>
          </ProductDetails>

          <ProductQtdArea>
            <ProductQtd>
              <ProductQtImg onClick={handleMinus} src="/assets/minus.png" />
              <ProductText>{qt}</ProductText>
              <ProductQtImg onClick={handlePlus} src="/assets/plus.png" />
            </ProductQtd>
            <ProductPrice>
              {(data.price * qt).toFixed(2).replace(".", ",")}
            </ProductPrice>
          </ProductQtdArea>
        </ProductInfoArea>
      </ProductArea>
      <ProductButtons>
        <ProductBotton small={true} onClick={handleClick}>
          Cancelar
        </ProductBotton>
        <ProductBotton onClick={handleCart}>
          Adicionar ao carrinho
        </ProductBotton>
      </ProductButtons>
    </Container>
  );
};

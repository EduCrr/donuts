import React, { useState } from "react";
import {
  Container,
  CartArea,
  CartItem,
  CartBody,
  ProductsArea,
  ProductItem,
  ProductPhoto,
  ProductInfoArea,
  ProductName,
  ProductPrice,
  ProductQt,
  ProductQtIcon,
  ProductQtText,
} from "./styled";
import { useSelector, useDispatch } from "react-redux";
export default () => {
  //let subtotal = 0;
  let products = useSelector((state) => state.cart.products);
  let teste = useSelector((state) => state.cart.products.price);
  console.log(teste);
  let dispatch = useDispatch();
  const [cartOpen, setCartOpen] = useState(false);
  function handleClick() {
    setCartOpen(!cartOpen);
  }
  //qual o é produto e a operacao + ou -
  function handleClickQt(k, type) {
    dispatch({
      type: "PRODUCT_QTD",
      payload: {
        k,
        type,
      },
    });
  }
  return (
    <Container>
      <CartArea>
        <CartItem onClick={handleClick}>
          <img src="/assets/cartMenu.png" />
        </CartItem>
        {products.length > 0 ? (
          <>
            <span className="badge badge-light">{products.length}</span>
            <CartBody
              style={{
                marginRight: cartOpen ? "0px" : "-2220px",
                transition: "all ease 0.7s",
              }}
            >
              <a onClick={handleClick}>X</a>
              <ProductsArea>
                {products.map((item, k) => (
                  <ProductItem key={k}>
                    <ProductPhoto src={item.image} />
                    <ProductInfoArea>
                      <ProductName>{item.name}</ProductName>
                      <ProductPrice>
                        R${(item.price * item.qt).toFixed(2).replace(".", ",")}
                      </ProductPrice>
                    </ProductInfoArea>
                    <ProductQt>
                      <ProductQtIcon
                        onClick={() => handleClickQt(k, "-")}
                        src="/assets/minus.png"
                      />
                      <ProductQtText>{item.qt}</ProductQtText>
                      <ProductQtIcon
                        onClick={() => handleClickQt(k, "+")}
                        src="/assets/plus.png"
                      />
                    </ProductQt>
                  </ProductItem>
                ))}
              </ProductsArea>
            </CartBody>
          </>
        ) : (
          ""
        )}
      </CartArea>
    </Container>
  );
};

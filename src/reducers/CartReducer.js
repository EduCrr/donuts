const initialState = {
  products: [],
  address: [],
  discount: 0,
  delivery: 0,
};

export default (state = initialState, action) => {
  let products = [...state.products];
  let qts = products.qt;
  console.log(toString(qts));
  switch (action.type) {
    case "ADD_PRODUCT":
      let id = action.payload.data.id;
      let indexProduct = products.findIndex((item) => item.id === id);
      //achou produto já add no carrinho
      if (indexProduct > -1) {
        //aumenta a qt quando ja existe o produto no carrinho
        products[indexProduct].qt += action.payload.qt;
      } else {
        products.push({
          //cria um objeto dentro de produtos ...seria-copia
          ...action.payload.data,
          qt: action.payload.qt,
        });
      }
      console.log(products);

      return { ...state, products };
      break;

    case "PRODUCT_QTD":
      let keyProductQt = action.payload.k;
      if (products[keyProductQt]) {
        switch (action.payload.type) {
          case "-":
            products[keyProductQt].qt--;
            if (products[keyProductQt].qt <= 0) {
              products = products.filter(
                (item, index) => index != keyProductQt
              );
            }
            break;
          case "+":
            products[keyProductQt].qt++;
            break;
        }
      }
      return { ...state, products };
      break;
  }

  return state;
};

/*case "SET_NAME":
      return { ...state, name: action.payload.name };
      break;
    case "SET_TOKEN":
      return { ...state, token: action.payload.token };
      break; 
      
      let products = [...state.products];
      //id do produto
      let id = action.payload.data.id;

      let verificacao = products.findIndex((item) => item.id === id);
      //achou o id do produto
      if (verificacao > -1) {
        products[verificacao].qt += action.payload.qt;
      } else {
        products.push({
          ...action.payload.data,
          qt: action.payload.qt,
        });
      }
      */

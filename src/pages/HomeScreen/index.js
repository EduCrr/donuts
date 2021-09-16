import React, { useState, useEffect } from "react";

import {
  Container,
  HeaderArea,
  ProductPaginationArea,
  ProductPaginationItem,
} from "./styled";
import Header from "../../components/Header";
import Cart from "../../components/Cart";
import Categories from "../../components/Categories";
import Slider from "react-slick";
import api from "../../api";
import Product from "../../components/Product";
import Promotional from "../../components/Promotional";
import Modal from "../../components/Modal";
import ModalProduct from "../../components/ModalProduct";
let searchTimer = null;
export default () => {
  //SLIDE
  const settings = {
    dots: true,
    slidesToScroll: 1,
    arrows: false,
    speed: 2000,
    slidesToShow: 1,
    focusOnSelect: true,
    slidesToScroll: 1,
  };

  const [headerSearch, setHandleSearch] = useState("");
  //recebe a palavra digitada apos 2s
  const [activeSearch, setActiveSearch] = useState("");

  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(0);
  const [nameCategory, setNameCategory] = useState("Todos");
  const [products, setProducts] = useState([]);
  const [promotional, setPromotional] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [activePage, setActivePage] = useState(1);
  const [modalStatus, setModalStatus] = useState(false);

  //modal dados produtos
  const [modalData, setModalData] = useState({});
  function handleModalClick(data) {
    setModalData(data);
    setModalStatus(true);
  }

  //monitorar o input busca
  useEffect(() => {
    clearTimeout(searchTimer);
    //espera rodar 2 segundos e envia os dados
    searchTimer = setTimeout(() => {
      setActiveSearch(headerSearch);
    }, 2000);
  }, [headerSearch]);

  //CHAMANDO API
  useEffect(() => {
    const getCategories = async () => {
      let cat = await api.getCategories();
      if (cat.error == "") {
        setCategories(cat.result);
      }
    };
    getCategories();
  }, []);

  //promotional
  useEffect(() => {
    const getPromotional = async () => {
      let promo = await api.getPromotional();
      if (promo.error == "") {
        setPromotional(promo.result.data);
      }
    };
    getPromotional();
  }, []);

  //products
  const getProducts = async () => {
    let pro = await api.getProducts(activeCategory, activeSearch, activePage);
    if (pro.error == "") {
      setProducts(pro.result.data);
      setTotalPages(pro.result.pages);
      setActivePage(pro.result.page);
    }
  };
  function handleClear() {
    setHandleSearch("");
  }

  //muda a categoria/pagina/input e carrega os produtos
  useEffect(() => {
    getProducts();
  }, [activeCategory, activePage, activeSearch]);

  return (
    <>
      <HeaderArea>
        <Header search={headerSearch} onSearch={setHandleSearch} />
        <Cart />
      </HeaderArea>
      <Container>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-8">
              <div className="row">
                {categories.length > 0 && (
                  <>
                    <Categories
                      data={{
                        id: 0,
                        name: "Todos",
                        image: "/assets/food-and-restaurant.png",
                      }}
                      activeCategory={activeCategory}
                      setActiveCategory={setActiveCategory}
                      setNameCategory={setNameCategory}
                    />
                    {categories.map((item, k) => (
                      <Categories
                        data={item}
                        key={k}
                        activeCategory={activeCategory}
                        setActiveCategory={setActiveCategory}
                        setNameCategory={setNameCategory}
                      />
                    ))}
                  </>
                )}
              </div>
            </div>
            <div className="col-xl-4">
              <div>
                <Slider {...settings}>
                  <div className="silderArea">
                    <div className="sliderText">
                      <h3>30% off</h3>
                      <p>Promoção chegando...</p>
                    </div>
                    <div className="sliderPhoto">
                      <img src="/assets/donustSlider.png" />
                    </div>
                  </div>
                  <div className="silderArea">
                    <div className="sliderText">
                      <h3>30% off</h3>
                      <p>the full price of rolls</p>
                    </div>
                    <div className="sliderPhoto">
                      <img src="/assets/donustSlider.png" />
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-8">
              <div className="row">
                <div className="filtro">
                  <h1>{nameCategory}</h1>
                  <div className="btn-filtro" onClick={handleClear}>
                    <img src="/assets/filtro.png" />
                  </div>
                </div>
                {products.length > 0 && (
                  <>
                    {products.map((item, k) => (
                      <Product data={item} key={k} onClick={handleModalClick} />
                    ))}
                    {totalPages > 0 && (
                      <ProductPaginationArea>
                        {Array(totalPages)
                          .fill(0)
                          .map((item, k) => (
                            <ProductPaginationItem
                              key={k}
                              active={activePage}
                              current={k + 1}
                              onClick={() => setActivePage(k + 1)}
                            >
                              {k + 1}
                            </ProductPaginationItem>
                          ))}
                      </ProductPaginationArea>
                    )}
                  </>
                )}
                {products.length == 0 && (
                  <>
                    <h4>Não foi encontrado nenhum produto 😔</h4>
                  </>
                )}
              </div>
            </div>
            <div className="col-xl-4">
              {promotional.length > 0 && (
                <>
                  <h1 className="promo">Kits promocionais</h1>
                  {promotional.map((item, k) => (
                    <Promotional
                      onClick={handleModalClick}
                      data={item}
                      key={k}
                    />
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
        <Modal setStatus={setModalStatus} status={modalStatus}>
          <ModalProduct setStatus={setModalStatus} data={modalData} />
        </Modal>
      </Container>
    </>
  );
};

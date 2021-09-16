import React from "react";
import { CategorieItem, CategoriePhoto, CategorieTitle } from "./styled";
export default ({
  data,
  activeCategory,
  setActiveCategory,
  setNameCategory,
  cleanSearch,
}) => {
  function handleClick() {
    setActiveCategory(data.id);
    setNameCategory(data.name);
  }

  return (
    <>
      <div className="col-md">
        <CategorieItem>
          <CategoriePhoto>
            <img src={data.image} />
          </CategoriePhoto>
          <CategorieTitle
            active={activeCategory}
            id={data.id}
            onClick={handleClick}
          >
            {data.name}
          </CategorieTitle>
        </CategorieItem>
      </div>
    </>
  );
};

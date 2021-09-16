import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { SearchInput } from "./styled";
export default ({ search, onSearch }) => {
  function handleChange(e) {
    onSearch(e.target.value);
  }
  return (
    <SearchInput value={search} onChange={handleChange} placeholder="Buscar" />
  );
};

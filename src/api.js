let BASE = "https://api.b7web.com.br/devsfood/api";
export default {
  getCategories: async () => {
    let res = await fetch(BASE + "/categories");
    let json = await res.json();
    return json;
  },
  getProducts: async (category, search, page) => {
    //GET /api/products ([search, page, category])
    let buscar = {};
    if (category !== 0) {
      buscar.category = category;
    }
    if (search !== "") {
      buscar.search = search;
    }
    if (page > 0) {
      buscar.page = page;
    }
    //buscar agora {category:2, page:1,search:'bolo'}

    //buscar depois de queryString: "category=2&page=1&search=bolo"
    let queryString = new URLSearchParams(buscar).toString();
    let res = await fetch(BASE + "/products?" + queryString);
    let json = await res.json();
    return json;
  },
  getPromotional: async () => {
    let res = await fetch(BASE + "/products");
    let json = await res.json();
    return json;
  },
};

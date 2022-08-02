import React from "react";
import Product from "../../../components/Admin/products/index";
import ProductListAdminProvider from "../../../contexts/providers/admin/ProductListAdminProvider";

const ListProductPage = (props) => {
  return (
    <ProductListAdminProvider>
    <Product />
    </ProductListAdminProvider>
  )
}

export default ListProductPage;
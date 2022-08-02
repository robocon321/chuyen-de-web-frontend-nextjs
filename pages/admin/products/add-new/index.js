import React from "react";
import AddNew from "../../../../components/Admin/products/add-new/index";
import ProductNewAdminProvider from '../../../../contexts/providers/admin/ProductNewAdminProvider'

const AddNewProductPage = () => {
  return (
  <ProductNewAdminProvider> 
     <AddNew/>
  </ProductNewAdminProvider>
)
};

export default AddNewProductPage;

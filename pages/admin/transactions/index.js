import React from "react";
import Transaction from "../../../components/Admin/transactions/index";
import AdminCommon from "../../../components/Admin/AdminCommon";

const ListTransactionPage = (props) => {
  return (
    <AdminCommon>
      <Transaction />
    </AdminCommon>
  )
}

export default ListTransactionPage;
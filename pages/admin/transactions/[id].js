import React from "react";
import Transaction from "../../../components/Admin/transactions/detail-transaction/index";
import AdminCommon from "../../../components/Admin/AdminCommon";

const DetailTransactionPage = (props) => {
  return (
    <AdminCommon>
      <Transaction />
    </AdminCommon>
  )
}

export default DetailTransactionPage;
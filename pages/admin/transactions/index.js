import React from "react";
import Transaction from "../../../components/Admin/transactions/index";
import TransactionsProvider from "../../../contexts/providers/admin/TransactionsProvider";

const ListTransactionPage = (props) => {
  return (
    <TransactionsProvider>
    <Transaction />
    </TransactionsProvider>
  )
}

export default ListTransactionPage;
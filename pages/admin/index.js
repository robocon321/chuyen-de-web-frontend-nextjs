import React from "react";
import Dashboard from "./dashboard/index";
import AdminCommon from "../../components/Admin/AdminCommon";

const DashboardPage = (props) => {
  return (
    <AdminCommon>
      <Dashboard />
    </AdminCommon>
  )
}

export default DashboardPage;
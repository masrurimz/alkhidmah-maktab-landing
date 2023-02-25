import React from "react";
import { api } from "~/utils/api";
import AdminMaktabDetails from "../AdminMaktabDetails/AdminMaktabDetails";
import AdminMaktabPrint from "../AdminMaktabPrint/AdminMaktabPrint";
import EditForm from "./components/EditForm";
import Table from "./components/Table";

function AdminMaktabList() {
  const list = api.maktab.findAll.useQuery({
    page: 1,
  });

  return (
    <>
      <div className="p-5">
        <Table data={list.data} />
        <EditForm />
        <AdminMaktabDetails />
      </div>
      <AdminMaktabPrint />
    </>
  );
}

export default AdminMaktabList;

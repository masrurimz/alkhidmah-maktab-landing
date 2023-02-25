import React, { useEffect } from "react";
import { api } from "~/utils/api";
import AdminMaktabDetails from "../AdminMaktabDetails/AdminMaktabDetails";
import AdminMaktabPrint from "../AdminMaktabPrint/AdminMaktabPrint";
import useAdminMaktabListQuery from "../hooks/useAdminMaktabListQuery";
import { useAdminMaktabListStore } from "./adminMaktabList.store";
import EditForm from "./components/EditForm";
import Table from "./components/Table";

function AdminMaktabList() {
  const { data } = useAdminMaktabListQuery();

  const resetPage = useAdminMaktabListStore((s) => s.resetPage);
  useEffect(() => {
    resetPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="p-5">
        <Table data={data?.pages.map((p) => p.items).flat()} />
        <EditForm />
        <AdminMaktabDetails />
      </div>
      <AdminMaktabPrint />
    </>
  );
}

export default AdminMaktabList;

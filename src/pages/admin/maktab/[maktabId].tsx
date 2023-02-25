import { useRouter } from "next/router";
import React from "react";
import AdminMaktabList from "~/features/admin/maktab/AdminMaktabList/AdminMaktabList";

function Maktab() {
  const router = useRouter();
  const { maktabId } = router.query;

  return <div>maktabId {maktabId}</div>;
}

export default Maktab;

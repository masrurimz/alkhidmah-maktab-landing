import { useRouter } from "next/router";

function Maktab() {
  const router = useRouter();
  const { maktabId } = router.query;

  return <div>maktabId {maktabId}</div>;
}

export default Maktab;

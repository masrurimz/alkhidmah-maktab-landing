import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import InputSearchBox from "~/common/components/InputSearchBox";
import { api } from "~/utils/api";
import { useMaktabHelpStore } from "../MaktabHelp/maktabHelp.store";
import MaktabListItem from "./MaktabListItem";

function MaktabList() {
  const router = useRouter();
  const { q } = router.query;

  const showHelp = useMaktabHelpStore((state) => state.showModal);

  const [query, setQuery] = useState(typeof q === "string" ? q : q?.[0] ?? "");
  const updateSearchPage = () => {
    void router.push({
      pathname: "/search",
      query: {
        q: query,
      },
    });
  };

  const list = api.maktab.findByContingent.useQuery(
    typeof q === "string" ? q : "",
    {
      enabled: Boolean(q && query),
    }
  );

  useEffect(() => {
    setQuery(typeof q === "string" ? q : q?.[0] ?? "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="absolute bottom-5 right-5">
        <button
          onClick={() => showHelp()}
          type="button"
          className="inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Bantuan
        </button>
      </div>
      <div className="z-1 sticky top-0 bg-blue-50 p-5 shadow-sm">
        <form>
          <InputSearchBox
            onChangeText={setQuery}
            onPressButton={updateSearchPage}
            value={query}
          />
        </form>
        {!query?.length ? (
          <p className="pt-2 text-sm text-red-400">
            Silahkan memasukkan kata kunci pencarian
          </p>
        ) : null}
        {list.isLoading ? (
          <p className="py-10 text-center text-sm text-gray-400">
            Memuat, mohon tunggu...
          </p>
        ) : null}
      </div>
      <div className="px-5">
        {list.data?.map((m) => (
          <MaktabListItem
            key={m.id}
            contingentAddress={m.contingentAddress}
            contingentCoordinator={m.contingentCoordinatorName}
            maktabAddress={m.maktabAddress}
            maktabOwnerName={m.maktabOwnerName}
            maktabSector={m.sector}
            contingentCoordinatorPhone={m.contingentCoordinatorPhone}
            maktabOwnerPhone={m.maktabOwnerPhone}
          />
        ))}
        {!list.data?.length && !list.isLoading && query?.length ? (
          <p className="py-10 text-center text-sm text-gray-400">
            Hasil pencarian dengan kata kunci <b>&quot;{query}&quot;</b> kosong
          </p>
        ) : null}
      </div>
    </>
  );
}

export default MaktabList;

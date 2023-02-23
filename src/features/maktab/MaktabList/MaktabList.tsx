import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
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
      <div className="fixed bottom-5 right-5">
        <button
          onClick={() => showHelp()}
          type="button"
          className="mr-2 mb-2 flex flex-row items-center gap-2 rounded-full bg-green-700 px-5 py-2.5 text-center text-base text-white hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Hubungi Ketua Sektor
          <FaWhatsapp size={32} />
        </button>
      </div>
      <div className="z-1 sticky top-0 bg-blue-50 p-5 shadow-sm">
        <form>
          <InputSearchBox
            onChangeText={setQuery}
            onPressButton={updateSearchPage}
            value={query}
            isLoading={list.isLoading}
          />
        </form>
        {!query?.length ? (
          <p className="pt-2 text-sm text-red-400">
            Silahkan memasukkan kata kunci pencarian
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

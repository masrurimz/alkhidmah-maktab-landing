import { useRouter } from "next/router";
import React, { useState } from "react";
import InputSearchBox from "~/common/components/InputSearchBox";
import { api } from "~/utils/api";
import MaktabListItem from "./MaktabListItem";

function MaktabList() {
  const router = useRouter();
  const { q } = router.query;

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

  return (
    <div>
      <div className="sticky top-0 z-50 bg-blue-50 p-5 shadow-sm">
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
          />
        ))}
        {!list.data?.length && !list.isLoading && query?.length ? (
          <p className="py-10 text-center text-sm text-gray-400">
            Hasil pencarian dengan kata kunci <b>&quot;{query}&quot;</b> kosong
          </p>
        ) : null}
      </div>
    </div>
  );
}

export default MaktabList;

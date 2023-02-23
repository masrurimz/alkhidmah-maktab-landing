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
    typeof q === "string" ? q : ""
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
      </div>
    </div>
  );
}

export default MaktabList;

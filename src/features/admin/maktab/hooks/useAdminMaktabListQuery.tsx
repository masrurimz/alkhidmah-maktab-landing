import { useEffect, useState } from "react";
import { api } from "~/utils/api";
import { useAdminMaktabListStore } from "../AdminMaktabList/adminMaktabList.store";

function useAdminMaktabListQuery() {
  const searchQuery = useAdminMaktabListStore((s) => s.query);

  const { data, fetchNextPage, isLoading, isFetchingNextPage } =
    api.maktab.findAll.useInfiniteQuery(
      {
        query: searchQuery,
        limit: 15,
      },
      {
        getNextPageParam: (lastPage) => lastPage.nextCursor,
      }
    );

  const [query, setQuery] = useState("");
  const setSearchQuery = useAdminMaktabListStore((s) => s.setQuery);
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchQuery(query);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return {
    data,
    fetchNextPage,
    isLoading,
    isFetchingNextPage,
    setQuery,
    query,
  };
}

export default useAdminMaktabListQuery;

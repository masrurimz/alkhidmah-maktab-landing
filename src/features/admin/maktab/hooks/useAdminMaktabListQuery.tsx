import { api } from "~/utils/api";
import { useAdminMaktabListStore } from "../AdminMaktabList/adminMaktabList.store";

function useAdminMaktabListQuery() {
  // const page = useAdminMaktabListStore((s) => s.page);
  // const list = api.maktab.findAll.useQuery({
  //   page,
  // });
  // const loadMore = useAdminMaktabListStore((s) => s.loadMore);

  // api.maktab.findAll.useInfiniteQuery()

  const { data, fetchNextPage, isLoading, isFetchingNextPage } =
    api.maktab.findAll.useInfiniteQuery(
      {
        // todo: make this limit depending on the screen size
        limit: 15,
      },
      {
        getNextPageParam: (lastPage) => lastPage.nextCursor,
      }
    );

  return {
    data,
    fetchNextPage,
    isLoading,
    isFetchingNextPage,
  };
}

export default useAdminMaktabListQuery;

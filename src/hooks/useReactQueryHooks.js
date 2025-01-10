import {
  useQuery,
  useMutation,
  useQueryClient,
  useInfiniteQuery,
} from "@tanstack/react-query";
import { api } from "../services";

export const useFetch = (qKey, endpoint, options = {}) => {
  const { isLoading, data, isError } = useQuery({
    queryKey: qKey,
    queryFn: async () => {
      const { data } = await api.get(endpoint);
      return data;
    },
    ...options,
  });

  return { isLoading, isError, data };
};

export const usePost = (qKey, endpoint) => {
  const queryClient = useQueryClient();
  const { mutate: postReq, isLoading } = useMutation({
    mutationFn: (objData) => api.post(endpoint, objData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: qKey });
    },
    onError: (error) => {
      console.log(error);
      //handle error
    },
  });
  return { postReq, isLoading };
};

export const useFetchPaginatedData = (qKey, endpoint, limit) => {
  const fetchData = async ({ pageParam = 0 }) => {
    const response = await api.get(endpoint, {
      params: {
        limit: limit,
        offset: pageParam,
      },
    });

    return response.data; // Return the fetched data
  };

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    error,
  } = useInfiniteQuery({
    queryKey: qKey,
    queryFn: fetchData,
    getNextPageParam: (lastPage, allPages) => {
      const totalFetched = allPages.length * limit;
      if (lastPage.results.length < limit || lastPage.results.length === 0) {
        return undefined;
      }
      return totalFetched;
    },
  });

  return {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetchingNextPage,
    isError,
    error,
  };
};


export const useFetchSortedData = (qKey, endpoint, limit, sort, order) => {
  const fetchData = async ({ pageParam = 0 }) => {
    const response = await api.get(endpoint, {
      params: {
        limit: limit,
        offset: pageParam,
        sort: sort,
        order: order
      },
    });

    return response.data; // Return the fetched data
  };

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    error,
  } = useInfiniteQuery({
    queryKey: qKey,
    queryFn: fetchData,
    getNextPageParam: (lastPage, allPages) => {
      const totalFetched = allPages.length * limit;
      if (lastPage.results.length < limit || lastPage.results.length === 0) {
        return undefined;
      }
      return totalFetched;
    },
  });

  return {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetchingNextPage,
    isError,
    error,
  };
};

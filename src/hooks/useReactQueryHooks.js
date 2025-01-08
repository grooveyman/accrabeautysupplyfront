import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
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
        console.log(error)
      //handle error
    },
  });
  return { postReq, isLoading };
};

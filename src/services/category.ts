import axios, { fetcher } from "@/utils/axios";
import { ICategoryItem } from "@/@types/product";
import { endpoints } from "../../global-config";
import useSWR from "swr";
import { useMemo } from "react";

export const getAllCategory = async () => {
  const response = await axios.get<ICategoryItem[]>(endpoints.category.list);
  return response.data;
};

export const saveCategory = async (data: any) => {
  const response = await axios.post<any>(endpoints.category.save, {
    ...data,
  });

  return response.data;
};

// AdminPart
export function useGetCategory(id: string) {
  const URL = endpoints.admin.category.edit(id);

  const { data, isLoading, error, isValidating } = useSWR(URL, fetcher);

  const memoizedValue = useMemo(
    () => ({
      category: (data as ICategoryItem) || {},
      categoryLoading: isLoading,
    }),
    [data?.posts, error, isLoading, isValidating]
  );

  return memoizedValue;
}

export const updateCategory = async (data: any) => {
  const URL = endpoints.admin.category.edit(data._id);

  const response = await axios.post<any>(URL, {
    ...data,
  });

  return response.data;
};

export const removeCategory = async () => {};

import useSWR from "swr";
import axios, { fetcher } from "@/utils/axios";
import { IAddressItem, ICustomerItem } from "@/@types/customer";
import { endpoints } from "../../global-config";
import { useMemo } from "react";

export const addAddress = async (data: any) => {
  const response = await axios.post(endpoints.customer.address.create, data);

  return response.data;
};

export const getAllAddress = async () => {
  const response = await axios.get<IAddressItem[]>(
    endpoints.customer.address.list
  );

  return response.data;
};

export const addPayment = async (data: any) => {
  const response = await axios.post(endpoints.customer.payment.create, data);

  return response.data;
};

export function useGetPayments() {
  const URL = endpoints.customer.payment.list;

  const { data, isLoading, error, isValidating } = useSWR(URL, fetcher);

  const memoizedValue = useMemo(
    () => ({
      payments: data || [],
      paymentLoading: isLoading,
    }),
    [data?.posts, error, isLoading, isValidating]
  );

  return memoizedValue;
}

/* Customer Profile */
export function useGetProfile() {
  const URL = endpoints.customer.profile.profile;

  const { data, isLoading, error, isValidating } = useSWR(URL, fetcher);

  const memoizedValue = useMemo(
    () => ({
      profile: (data as ICustomerItem) || {},
      profileLoading: isLoading,
    }),
    [data?.posts, error, isLoading, isValidating]
  );

  return memoizedValue;
}

export async function saveProfile(data: any) {
  const response = await axios.post(endpoints.customer.profile.update, data);
  return response.data;
}

/* Customer Password */
export async function changePassword(data: any) {
  const response = await axios.post(endpoints.customer.password, data);
  return response.data;
}

/* Customer List */
export const getAllCustomer = async () => {
  const response = await axios.get<ICustomerItem[]>(endpoints.customer.list);
  return response.data;
};

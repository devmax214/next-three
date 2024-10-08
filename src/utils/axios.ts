import axios, { AxiosRequestConfig } from "axios";
import { HOST_API } from "../../global-config";

const axiosInstance = axios.create({ baseURL: HOST_API });

axiosInstance.interceptors.request.use(async (request) => {
  // const session = await getSession();
  //
  // if (session) {
  //   request.headers.Authorization = `Bearer ${session.jwt}`;
  // }
  return request;
});

axiosInstance.interceptors.response.use(
  (res) => res,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    )
);

export default axiosInstance;

export const fetcher = async (args: string | [string, AxiosRequestConfig]) => {
  const [url, config] = Array.isArray(args) ? args : [args];

  const res = await axiosInstance.get(url, { ...config });

  return res.data;
};

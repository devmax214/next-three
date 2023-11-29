import axios from "@/utils/axios";
import { endpoints } from "../../global-config";

export const createOrder = async (data: any) => {
  const response = await axios.post(endpoints.order.create, data);

  return response.data;
};

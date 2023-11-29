import axios from "@/utils/axios";
import { endpoints } from "../../../global-config";
import { ICustomizationProduct } from "@/@types/configuration";

export const getAllProduct = async () => {
  const response = await axios.get<ICustomizationProduct[]>(
    endpoints.configuration.list
  );
  return response.data;
};

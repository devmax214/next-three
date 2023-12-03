import axios from "@/utils/axios";
import { endpoints } from "../../global-config";

export const uploadFile = async (file: File) => {
  const response = await axios.post(
    endpoints.upload,
    { file: file },
    { headers: { "Content-Type": "multipart/form-data" } }
  );

  return response.data;
};

export const uploadImage = async (file: any) => {
  const response = await axios.post(
    endpoints.image,
    { file: file },
    // { headers: { "Content-Type": "application/json" } }
  );

  return response.data;
};

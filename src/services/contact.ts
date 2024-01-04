import axios from "@/utils/axios";
import { endpoints } from "../../global-config";

export async function sendContact(data: any) {
  const response = await axios.post(endpoints.contact, data);
  return response.data;
}

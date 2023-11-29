import axios from "@/utils/axios";
import { endpoints } from "../../global-config";
import { IColorItem, IMaterialItem, ISizeItem } from "@/@types/product";

export const getAllSize = async () => {
  const response = await axios.get<ISizeItem[]>(endpoints.attribute.size.list);
  return response.data;
};

export const saveSize = async (data: any) => {
  const response = await axios.post<any>(endpoints.attribute.size.save, {
    ...data,
  });

  return response.data;
};

export const editSize = async (data: any) => {
  const response = await axios.post<any>(
    endpoints.attribute.size.edit(data._id),
    {
      ...data,
    }
  );

  return response.data;
};

export const getAllColor = async () => {
  const response = await axios.get<IColorItem[]>(
    endpoints.attribute.color.list
  );

  return response.data;
};

export const saveColor = async (data: any) => {
  const response = await axios.post<any>(endpoints.attribute.color.save, {
    ...data,
  });

  return response.data;
};

export const editColor = async (data: any) => {
  const response = await axios.post<any>(
    endpoints.attribute.color.edit(data._id),
    {
      ...data,
    }
  );

  return response.data;
};

export const getAllMaterial = async () => {
  const response = await axios.get<IMaterialItem[]>(
    endpoints.attribute.material.list
  );

  return response.data;
};

export const saveMaterial = async (data: any) => {
  const response = await axios.post<any>(endpoints.attribute.material.save, {
    ...data,
  });

  return response.data;
};

export const editMaterial = async (data: any) => {
  const response = await axios.post<any>(
    endpoints.attribute.material.edit(data._id),
    {
      ...data,
    }
  );

  return response.data;
};

export const createProduct = async (data: any) => {
  const response = await axios.post(endpoints.admin.product.create, data);

  return response.data;
};

export const editProduct = async (data: any) => {
  const response = await axios.post(
    endpoints.admin.product.edit(data._id),
    data
  );

  return response.data;
};

export const getAllProductForUser = async () => {
  const response = await axios.get<IMaterialItem[]>(endpoints.product.list);

  return response.data;
};

export const getAllProductForAdmin = async () => {
  const response = await axios.get<IMaterialItem[]>(
    endpoints.admin.product.list
  );

  return response.data;
};

export const getProductForUser = async (id: string) => {
  const response = await axios.get(endpoints.product.detail(id));

  return response.data;
};

export const getProductForAdmin = async (id: string) => {
  const response = await axios.get(endpoints.admin.product.edit(id));

  return response.data;
};

export const getBestSeller = async () => {
  const response = await axios.get<IMaterialItem[]>(
    endpoints.product.bestSellers
  );

  return response.data;
};

export const getRelationProducts = async () => {
  const response = await axios.get<IMaterialItem[]>(
    endpoints.product.bestSellers
  );

  return response.data;
};

export const getProductSearch = async (
  data: [{ key: string; value: string }]
) => {
  const afterFix = data.map((d) => `${d.key}=${d.value}`).join("&");
  const response = await axios.get<IMaterialItem[]>(
    `${endpoints.product.search}?${afterFix}`
  );

  return response.data;
};

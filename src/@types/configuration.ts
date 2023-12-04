export type IConfigurationCategory = {
  id: string;
  name: string;
  description: string;
  image: string;
  startPrice: number;
  attributes: { name: string; value: string }[];
};

export type ICustomizationProduct = {
  id: string;
  name: string;
  coverUrl: string;
  price: number;
  images: string[];
};

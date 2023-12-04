import { sub } from "date-fns";
import {
  _booleans,
  _emails,
  _fullNames,
  _id,
  _nativeL,
  _phoneNumbers,
  _prices,
  _productNames,
  _ratings,
  _sentences,
} from "@/@mockup/assets";

export const _mock = {
  id: (index: number) => _id[index],
  boolean: (index: number) => _booleans[index],

  time: (index: number) => sub(new Date(), { days: index, hours: index }),
  // Contact
  email: (index: number) => _emails[index],
  phoneNumber: (index: number) => _phoneNumbers[index],
  //
  productName: (index: number) => _productNames[index],
  sentence: (index: number) => _sentences[index],
  // Name
  fullName: (index: number) => _fullNames[index],

  // Image
  image: {
    avatar: (index: number) => `/images/avatar/${(index % 5) + 1}.jpg`,
    product: (index: number) =>
      `/images/product/product_${(index % 5) + 1}.png`,
  },
  number: {
    rating: (index: number) => _ratings[index],
    price: (index: number) => _prices[index],
    nativeL: (index: number) => _nativeL[index],
  },
};

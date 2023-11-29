import AddressForm from "../address-form";
import { IAddressItem } from "@/@types/checkout";

type Props = {
  currentAddress: IAddressItem;
};

export default function EditAddressView({ currentAddress }: Props) {
  return (
    <>
      <AddressForm />
    </>
  );
}

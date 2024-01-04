import { StackProps } from "@mui/material/Stack";
import { ISizeItem } from "@/@types/product";

export interface SizePickerProps extends StackProps {
  multi?: boolean;
  sizes: ISizeItem[];
  selected: ISizeItem | ISizeItem[];
  limit?: "auto" | number;
  onSelectSize: (color: ISizeItem | ISizeItem[]) => void;
}

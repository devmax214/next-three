import React, { useState } from "react";
import { IconButton, InputAdornment, InputBase } from "@mui/material";
import { useRouter } from "next/router";
import { styled } from "@mui/material/styles";
import SvgColor from "@/components/svg-color";
import { PATH_SHOP } from "@/routers/path";

export const InputField = styled(InputBase)`
  width: 150px;
  background-color: transparent;

  & > .MuiInputBase-input {
    padding: 0 0 0 10px;
  }

  & > .MuiInputAdornment-root {
    margin-right: 0;
  }

  &:hover {
    background-color: #eeeeee;
  }
`;

type Props = {};

export default function Searchbar(props: Props) {
  const router = useRouter();

  const [searchText, setSearchText] = useState("");

  const onClickSearch = () => {
    router.push(PATH_SHOP.product.search);
  };

  return (
    <InputField
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
      endAdornment={
        <InputAdornment position="start">
          <IconButton onClick={onClickSearch} disableRipple>
            <SvgColor src="/icons/search.svg" sx={{ width: 20, height: 20 }} />
          </IconButton>
        </InputAdornment>
      }
    />
  );
}

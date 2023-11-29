import React, { useCallback } from "react";
import { useRouter } from "next/router";
import { IconButton } from "@mui/material";
import { PATH_SHOP } from "@/routers/path";
import LoginUserIcon from "@/components/icons/icon-user-login";
import { useSession, signOut } from "next-auth/react";

type Props = {};

export default function UserButton(props: Props) {
  const { push } = useRouter();

  const { status } = useSession();

  const onClick = useCallback(() => {
    if (status === "authenticated") {
      push(PATH_SHOP.customer.root);
    } else {
      push(PATH_SHOP.login);
    }
  }, [status]);

  return (
    <>
      <IconButton onClick={onClick} disableRipple>
        <LoginUserIcon
          sx={{ width: 20, height: 20 }}
          login={status === "authenticated"}
        />
        {/*<SvgColor src="/icons/user.svg" sx={{ width: 20, height: 20 }} />*/}
      </IconButton>
    </>
  );
}

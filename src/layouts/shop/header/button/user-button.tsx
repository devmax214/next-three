import React, { useCallback } from "react";
import { useRouter } from "next/router";
import { IconButton } from "@mui/material";
import { PATH_SHOP } from "@/routers/path";
import { useSession } from "next-auth/react";
import LoginUserDarkIcon from "@/components/icons/icon-user-login-dark";

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
        <LoginUserDarkIcon
          sx={{ width: 20, height: 20 }}
          login={status === "authenticated"}
        />
        {/*<SvgColor src="/icons/user.svg" sx={{ width: 20, height: 20 }} />*/}
      </IconButton>
    </>
  );
}

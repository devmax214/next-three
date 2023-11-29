import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useSearchParams } from "@/routers/hook";
import { useSession } from "next-auth/react";
import { PATH_SHOP } from "@/routers/path";

type Props = {
  children: React.ReactNode;
};

export default function GuestGuard({ children }: Props) {
  const { data: session, status } = useSession();

  const router = useRouter();

  const searchParams = useSearchParams();

  const returnTo = searchParams.get("returnTo") || PATH_SHOP.home;

  useEffect(() => {
    if (status === "authenticated") {
      router.replace(returnTo);
    }
  }, [status]);

  // const check = useCallback(() => {
  //   if (status === "authenticated") {
  //     router.replace(returnTo);
  //   }
  // }, [status]);

  // useEffect(() => {
  //   check();
  // }, [check]);

  return <>{children}</>;
}

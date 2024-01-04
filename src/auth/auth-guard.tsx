import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { PATH_SHOP } from "@/routers/path";

type AuthGuardProps = {
  children: React.ReactNode;
};

export default function AuthGuard({ children }: AuthGuardProps) {
  const router = useRouter();

  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      const searchParams = new URLSearchParams({
        returnTo: window.location.pathname,
      }).toString();

      const loginPath = PATH_SHOP.login;

      const href = `${loginPath}?${searchParams}`;

      router.push(href);
    }
  }, [status]);

  if (status === "loading") {
    return <></>;
  }

  if (status === "unauthenticated") {
    return <></>;
  }

  return <>{children}</>;
}

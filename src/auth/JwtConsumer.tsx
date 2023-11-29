import React from "react";
import { AuthContext } from "./JwtContext";
import { SplashScreen } from "@/components/loading-screen";

type Props = {
  children: React.ReactNode;
};

export function AuthConsumer({ children }: Props) {
  return (
    <AuthContext.Consumer>
      {(auth) => (auth.loading ? <SplashScreen /> : children)}
    </AuthContext.Consumer>
  );
}

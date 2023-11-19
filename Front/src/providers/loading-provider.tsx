import Image from "next/image";
import { Suspense } from "react";

import LoadingIcon from "@/assets/fallback/loading.svg";

type LoadingProviderProps = {
  children: React.ReactNode;
};

export default function LoadingProvider({ children }: LoadingProviderProps) {
  return (
    <Suspense
      fallback={
        <div
          style={{
            display: "flex",
            width: "100vw",
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image src={LoadingIcon} priority width={100} height={100} alt="loading icon" />
        </div>
      }
    >
      {children}
    </Suspense>
  );
}

import React from "react";

import { FallbackWrapper } from "./styles";

export type SuspenseProps = {
  isSuspended?: boolean;
  fallback: React.ReactNode;
  children: React.ReactNode;
};

const Suspense: React.FC<SuspenseProps> = ({ children, isSuspended = false, fallback }) => {
  if (isSuspended) return <FallbackWrapper>{fallback}</FallbackWrapper>;

  return <>{children}</>;
};

export default Suspense;

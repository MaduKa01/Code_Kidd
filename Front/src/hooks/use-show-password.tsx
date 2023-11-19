"use client";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { HTMLInputTypeAttribute, ReactElement, useState } from "react";

import GLOBAL_TEST_IDS from "@/constants/global-test-ids";

export type UseShowPasswordReturn = {
  isPasswordVisible: boolean;
  showPassword: () => void;
  hidePassword: () => void;
  handlePasswordVisibility: () => void;
  inputType: HTMLInputTypeAttribute;
  inputIcon: ReactElement<unknown, string>;
};

export type UseShowPasswordProps = {
  initialValue?: boolean;
};

const useShowPassword = (props?: UseShowPasswordProps): UseShowPasswordReturn => {
  const { initialValue = false } = props || {};

  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(initialValue);
  const showPassword = () => {
    setIsPasswordVisible(true);
  };

  const hidePassword = () => {
    setIsPasswordVisible(false);
  };

  const handlePasswordVisibility = () => {
    setIsPasswordVisible((prevIsVisible) => !prevIsVisible);
  };

  const inputType: HTMLInputTypeAttribute = isPasswordVisible ? "text" : "password";

  const inputIcon = isPasswordVisible ? (
    <VisibilityOffIcon data-testid={GLOBAL_TEST_IDS.visibilityOffIcon} />
  ) : (
    <VisibilityIcon data-testid={GLOBAL_TEST_IDS.visibilityIcon} />
  );

  return {
    isPasswordVisible,
    showPassword,
    hidePassword,
    inputType,
    handlePasswordVisibility,
    inputIcon,
  };
};

export default useShowPassword;

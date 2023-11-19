"use client";
import { useTheme } from "@mui/material";
import { Formik } from "formik";
import Image from "next/image";

import FullLogoPrimary from "@/assets/logos/full-logo-primary.png";
import PageLayout from "@/components/templates/PageLayout";
import useAuth from "@/contexts/auth-context";
import { LoginMessages } from "@/messages/login.messages";

import LoginForm from "./components/LoginForm";
import { buildLoginFormInitialData, buildLoginFormSchema } from "./form-data";
import { LoginCardWrapper, LoginTitleCard } from "./styles";

type LoginProps = {
  messages: LoginMessages;
};
export default function Login({ messages }: LoginProps) {
  const { login, isLoggingIn: isLoading, loadingIconLoggingIn: loadingIcon } = useAuth();
  const theme = useTheme();
  const logoWidth = theme.margins.giant + theme.margins.huge;
  const logoHeight = theme.margins.xl;

  return (
    <PageLayout
      justifyContent="center"
      alignItems="center"
      ignoreAppBar
      ignoreSideBar
      messages={messages}
    >
      <LoginCardWrapper>
        <LoginTitleCard>
          <Image
            src={FullLogoPrimary}
            priority
            width={logoWidth}
            height={logoHeight}
            alt="Talk2Buy logo"
          />
        </LoginTitleCard>
        <Formik
          initialValues={buildLoginFormInitialData()}
          validateOnChange={false}
          onSubmit={(formData) => login({ formData })}
          validationSchema={buildLoginFormSchema(messages)}
        >
          <LoginForm isLoading={isLoading} loadingIcon={loadingIcon} messages={messages} />
        </Formik>
      </LoginCardWrapper>
    </PageLayout>
  );
}

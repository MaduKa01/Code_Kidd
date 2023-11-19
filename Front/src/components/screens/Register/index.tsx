"use client";
import { useTheme } from "@mui/material";
import { Formik } from "formik";
import Image from "next/image";

import FullLogoPrimary from "@/assets/logos/full-logo-primary.png";
import PageLayout from "@/components/templates/PageLayout";
import useAuth from "@/contexts/auth-context";
import { RegisterMessages } from "@/messages/register.messages";

import RegisterForm from "./components/RegisterForm";
import { buildRegisterFormInitialData, buildRegisterFormSchema } from "./form-data";
import { RegisterCardWrapper, RegisterTitleCard } from "./styles";
import { RegisterFormData } from "./types";

type RegisterProps = {
  messages: RegisterMessages;
};

export default function Register({ messages }: RegisterProps) {
  const { register, isRegistering: isLoading, loadingIconRegistering: loadingIcon } = useAuth();
  const theme = useTheme();
  const logoWidth = theme.margins.xxl + theme.margins.huge;
  const logoHeight = theme.margins.xl;

  const handleSubmitForm = async (formData: RegisterFormData) => {
    register({ formData });
  };

  return (
    <PageLayout
      justifyContent="center"
      alignItems="center"
      ignoreAppBar
      ignoreSideBar
      messages={messages}
    >
      <RegisterCardWrapper>
        <RegisterTitleCard>
          <Image
            src={FullLogoPrimary}
            priority
            width={logoWidth}
            height={logoHeight}
            alt="Talk2Buy logo"
          />
        </RegisterTitleCard>
        <Formik
          initialValues={buildRegisterFormInitialData()}
          validateOnChange={false}
          onSubmit={handleSubmitForm}
          validationSchema={buildRegisterFormSchema(messages)}
        >
          <RegisterForm isLoading={isLoading} loadingIcon={loadingIcon} messages={messages} />
        </Formik>
      </RegisterCardWrapper>
    </PageLayout>
  );
}

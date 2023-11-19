"use client";
import { Grid, IconButton, InputAdornment, TextField } from "@mui/material";
import { useFormikContext } from "formik";
import { ReactElement } from "react";

import Button from "@/components/atoms/Button";
import ROUTE_URLS from "@/constants/route-urls";
import useLanguage from "@/contexts/language-context";
import useShowPassword from "@/hooks/use-show-password";
import { LoginMessages } from "@/messages/login.messages";
import { Language } from "@/types/language.types";

import { DontHaveAnAccountLink, DontHaveAnAccountText, LoginFormContainer } from "../../styles";
import { LoginFormData } from "../../types";

type LoginFormProps = {
  messages: LoginMessages;
  isLoading: boolean;
  loadingIcon: ReactElement<unknown, string>;
};

export default function LoginForm({ messages, isLoading, loadingIcon }: LoginFormProps) {
  const { handlePasswordVisibility, inputType, inputIcon } = useShowPassword();

  const { lang } = useLanguage();
  const { values, errors, submitForm, handleChange } = useFormikContext<LoginFormData>();

  const onRegisterRedirect = () => {
    window.location.href = registerUrl;
  };

  const registerUrl = ROUTE_URLS.register(lang as Language);

  return (
    <LoginFormContainer
      onKeyPress={(event) => {
        if (event.key === "Enter" && !event.shiftKey) {
          submitForm();
        }
      }}
    >
      <Grid container spacing={4} style={{ padding: 20 }}>
        <Grid item xs={12}>
          <TextField
            placeholder={messages.emailPlaceholder}
            fullWidth
            label={messages.emailLabel}
            type="email"
            name="email"
            onChange={handleChange}
            value={values.email}
            error={!!errors.email}
            helperText={errors.email}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            placeholder={messages.passwordPlaceholder}
            fullWidth
            label={messages.passwordLabel}
            type={inputType}
            value={values.password}
            error={!!errors.password}
            helperText={errors.password}
            onChange={handleChange}
            name="password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handlePasswordVisibility}>{inputIcon}</IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button mode="contained" fullWidth onClick={submitForm} disabled={isLoading}>
            {isLoading ? loadingIcon : messages.loginAction}
          </Button>
        </Grid>

        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          sx={{ gap: "5px" }}
          xs={12}
        >
          <DontHaveAnAccountText>{messages.dontHaveAnAccount}</DontHaveAnAccountText>
          <DontHaveAnAccountLink
            variant="body1"
            onClick={onRegisterRedirect}
            sx={{ cursor: "pointer", textDecoration: "none" }}
          >
            {messages.clickText}
          </DontHaveAnAccountLink>
        </Grid>
      </Grid>
    </LoginFormContainer>
  );
}

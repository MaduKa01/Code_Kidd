import {
  Checkbox,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useFormikContext } from "formik";
import { ReactElement, useState } from "react";
import InputMask from "react-input-mask";

import Button from "@/components/atoms/Button";
import ROUTE_URLS from "@/constants/route-urls";
import useLanguage from "@/contexts/language-context";
import useShowPassword from "@/hooks/use-show-password";
import { IRegister } from "@/interfaces/auth.interfaces";
import { RegisterMessages } from "@/messages/register.messages";

import {
  AlreadyHaveAnAccountLink,
  AlreadyHaveAnAccountText,
  RegisterFormContainer,
} from "../../styles";

type RegisterFormProps = {
  messages: RegisterMessages;
  isLoading: boolean;
  loadingIcon: ReactElement<unknown, string>;
};

export default function RegisterForm({ messages, isLoading, loadingIcon }: RegisterFormProps) {
  const { handlePasswordVisibility, inputType, inputIcon } = useShowPassword();
  const { lang } = useLanguage();
  const { values, errors, submitForm, handleChange } = useFormikContext<IRegister>();
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const loginUrl = ROUTE_URLS.login(lang);

  return (
    <RegisterFormContainer>
      <Grid container spacing={4} style={{ padding: 5 }}>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom fontWeight="bold" style={{ textAlign: "center" }}>
            {messages.welcomeMessage}
          </Typography>
          <Typography variant="body1" style={{ textAlign: "center" }}>
            {messages.enterDetailsMessage}
          </Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={6}>
          <TextField
            placeholder="Nome"
            fullWidth
            label="Nome"
            name="name"
            onChange={handleChange}
            value={values.name}
            error={!!errors.name}
            helperText={errors.name}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={6}>
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

        <Grid item xs={12} sm={12} md={6}>
          <InputMask
            mask="(99) 99999-9999"
            value={values.cellphone}
            onChange={handleChange}
            placeholder="Numero do celular"
            name="cellphone"
          >
            <TextField
              fullWidth
              InputLabelProps={{ shrink: true }}
              label="Numero do celular"
              name="cellphone"
              value={values.cellphone}
              error={!!errors.cellphone}
              helperText={errors.cellphone}
            />
          </InputMask>
        </Grid>

        <Grid item xs={12} sm={12} md={6}>
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

        <Grid item xs={12} sm={12} md={12}>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                onChange={(event, checked) => setIsCheckboxChecked(checked)}
              />
            }
            label={
              <span>
                {messages.agreeTo}
                <a
                  style={{ marginLeft: "3px" }}
                  href="https://www.talk2buy.com.br/termsandconditions"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {messages.termsOfService}
                </a>
                .
              </span>
            }
          />
        </Grid>

        <Grid container item justifyContent="center" alignItems="center" xs={12} sm={12} md={12}>
          <Grid item xs={12} sm={12} md={6}>
            <Button
              fullWidth
              mode="contained"
              onClick={submitForm}
              disabled={isLoading || !isCheckboxChecked}
            >
              {isLoading ? loadingIcon : messages.registerAction}
            </Button>
          </Grid>
        </Grid>

        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          sx={{ gap: "5px" }}
          xs={12}
          sm={12}
          md={12}
        >
          <AlreadyHaveAnAccountText>{messages.alreadyHaveAnAccount}</AlreadyHaveAnAccountText>
          <AlreadyHaveAnAccountLink href={loginUrl}>{messages.clickText}</AlreadyHaveAnAccountLink>
        </Grid>
      </Grid>
    </RegisterFormContainer>
  );
}

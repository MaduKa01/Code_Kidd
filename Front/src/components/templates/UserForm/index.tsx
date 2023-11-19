"use client";
import { TextField } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useFormikContext } from "formik";
import { ReactElement } from "react";
import InputMask from "react-input-mask";

import Button from "@/components/atoms/Button";
import { IUserInput } from "@/interfaces/user.interface";
import { UserFormMessages } from "@/messages/user-form.messages";

type UserFormProps = {
  messages: UserFormMessages;
  isLoading: boolean;
  loadingIcon: ReactElement<unknown, string>;
  isEditing?: boolean;
};

export default function UserForm({
  messages,
  isLoading,
  loadingIcon,
  isEditing = false,
}: UserFormProps) {
  const { updateUserButton, createUserButton, ...labels } = messages;

  const { values, errors, submitForm, handleChange } = useFormikContext<IUserInput>();

  return (
    <Grid container spacing={6}>
      <Grid md={6} xs={12}>
        <TextField
          fullWidth
          variant="standard"
          InputLabelProps={{ shrink: true }}
          label={labels.nameLabel}
          name="name"
          onChange={handleChange}
          value={values.name}
          error={!!errors.name}
          helperText={errors.name}
        />
      </Grid>
      <Grid md={6} xs={12}>
        <TextField
          fullWidth
          variant="standard"
          InputLabelProps={{ shrink: true }}
          label={labels.emailLabel}
          name="email"
          onChange={handleChange}
          value={values.email}
          error={!!errors.email}
          helperText={errors.email}
        />
      </Grid>
      <Grid md={6} xs={12}>
        <InputMask
          mask="+99 (99) 99999-9999"
          value={values.cellphone}
          onChange={(e) => handleChange(e)}
          name="cellphone"
        >
          <TextField
            fullWidth
            variant="standard"
            InputLabelProps={{ shrink: true }}
            label={labels.phoneLabel}
            name="cellphone"
            value={values.cellphone}
            error={!!errors.cellphone}
            helperText={errors.cellphone}
          />
        </InputMask>
      </Grid>

      <Grid xs={12} sm={5} md={4} lg={3} xl={3} smOffset={7} mdOffset={8} lgOffset={9} xlOffset={9}>
        <Button mode="contained" fullWidth onClick={submitForm} disabled={isLoading}>
          {isLoading ? loadingIcon : isEditing ? updateUserButton : createUserButton}
        </Button>
      </Grid>
    </Grid>
  );
}

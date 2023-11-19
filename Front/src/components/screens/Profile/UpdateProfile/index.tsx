"use client";

import { Formik } from "formik";

import UserForm from "@/components/templates/UserForm";
import {
  buildUserFormInitialData,
  buildUserFormSchema,
} from "@/components/templates/UserForm/form-data";
import { UserFormData } from "@/components/templates/UserForm/types";
import SWR_KEYS from "@/constants/swr-keys";
import useUpdateUser from "@/hooks/requests/user/use-update-user";
import useLoading from "@/hooks/use-loading";
import useMutate from "@/hooks/use-mutate";
import IUser from "@/interfaces/user.interface";
import { ProfileMessages } from "@/messages/profile.messages";

type UpdateProfileProps = {
  messages: ProfileMessages;
  user: IUser;
};
export default function UpdateProfile({ messages, user }: UpdateProfileProps) {
  const { mutate } = useMutate();

  const { update, isLoading: isLoadingUpdate, loadingIcon } = useUpdateUser();
  const { startLoading, endLoading, isLoading } = useLoading();
  const { updateUserError: errorMessage, updateUserSuccess: successMessage } = messages;

  const handleUpdateUser = async (formData: UserFormData) => {
    startLoading();

    await update({
      formData: formData,
      _id: user._id,
      successMessage,
      errorMessage,
    });
    mutate(SWR_KEYS.getUserById);
    endLoading();
  };

  return (
    <Formik
      initialValues={buildUserFormInitialData(user)}
      validationSchema={buildUserFormSchema(messages)}
      validateOnChange={false}
      onSubmit={handleUpdateUser}
    >
      {() => (
        <UserForm
          messages={messages}
          isLoading={isLoading || isLoadingUpdate}
          loadingIcon={loadingIcon}
          isEditing
        />
      )}
    </Formik>
  );
}

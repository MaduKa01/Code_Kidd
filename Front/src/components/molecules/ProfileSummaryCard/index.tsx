"use client";

import { Avatar, useTheme } from "@mui/material";

import { getAvatarLetters } from "@/helpers/profile-helpers";
import useUserData from "@/hooks/data/use-user-data";
import IUser from "@/interfaces/user.interface";

import { ProfileName, ProfileSummaryCardContainer, TextContainer } from "./styles";

type ProfileSummaryCardProps = {
  user: IUser;
  userKeyText: string;
};
export default function ProfileSummaryCard({ user }: ProfileSummaryCardProps) {
  const { name = "" } = useUserData({ user });
  const {
    margins: { lg },
  } = useTheme();
  return (
    <ProfileSummaryCardContainer>
      <Avatar color="primary" sx={{ width: lg, height: lg }}>
        {getAvatarLetters(name)}
      </Avatar>
      <TextContainer>
        <ProfileName>{name}</ProfileName>
      </TextContainer>
    </ProfileSummaryCardContainer>
  );
}

"use client";

import { Card, CircularProgress, useTheme } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/";
import { usePathname } from "next/navigation";

import PageContainer from "@/components/atoms/PageContainer";
import AlertBlock from "@/components/molecules/AlertBlock";
import Suspense from "@/components/molecules/Suspense";
import PageLayout from "@/components/templates/PageLayout";
import ROUTE_URLS from "@/constants/route-urls";
import useAuth from "@/contexts/auth-context";
import useLanguage from "@/contexts/language-context";
import useGetUserById from "@/hooks/requests/user/use-get-user-by-id";
import { ProfileMessages } from "@/messages/profile.messages";

import UpdateProfile from "./UpdateProfile";
import ProfileSummaryCard from "../../molecules/ProfileSummaryCard";

type ProfileProps = {
  messages: ProfileMessages;
};

export default function Profile({ messages }: ProfileProps) {
  const {
    pageTitle,
    userErrorToLoadTitle,
    userNotFoundDescription,
    userNotFoundTitle,
    userNotFoundAlt,
    userKeyText,
  } = messages;

  const pathname = usePathname();
  const { lang } = useLanguage();
  const { user: authUser } = useAuth();

  const {
    data: user,
    isLoading: isLoadingUser,
    error,
  } = useGetUserById({ _id: String(authUser?._id) || "" });

  const {
    margins: { xxxs, xs },
    roundness: { md },
  } = useTheme();

  const isMainProfilePage = pathname === ROUTE_URLS.profile(lang);
  const shouldLoadUserNotFound = !user && !error && !authUser;
  const shouldLoadError = !!error;
  const shouldLoadUpdateProfile = !!authUser && user && isMainProfilePage;
  const shouldLoadProfileSummaryCard = shouldLoadUpdateProfile && user;

  const isLoading = isLoadingUser || (!error && !user);

  return (
    <PageLayout messages={messages} title={pageTitle}>
      <PageContainer>
        <Grid md={12} xs={12}>
          <Suspense fallback={<CircularProgress />} isSuspended={isLoading}>
            {!!shouldLoadProfileSummaryCard && (
              <ProfileSummaryCard user={user || authUser} userKeyText={userKeyText} />
            )}
          </Suspense>
          <Card style={{ marginTop: xxxs, padding: xs, borderRadius: md }}>
            <Suspense
              fallback={<CircularProgress style={{ marginTop: xxxs }} />}
              isSuspended={isLoading}
            >
              {shouldLoadUserNotFound && (
                <AlertBlock
                  title={userNotFoundTitle}
                  description={userNotFoundDescription}
                  alt={userNotFoundAlt}
                />
              )}
              {shouldLoadError && (
                <AlertBlock
                  title={userErrorToLoadTitle}
                  description={error.message}
                  alt={userNotFoundAlt}
                />
              )}
              {!!shouldLoadUpdateProfile && <UpdateProfile messages={messages} user={user} />}
            </Suspense>
          </Card>
        </Grid>
      </PageContainer>
    </PageLayout>
  );
}

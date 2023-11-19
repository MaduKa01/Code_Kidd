"use client";

import { Card, CircularProgress, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Image from "next/image";
import React from "react";

import robot from "@/assets/courses/robot.png";
import PageContainer from "@/components/atoms/PageContainer";
import Suspense from "@/components/molecules/Suspense";
import PageLayout from "@/components/templates/PageLayout";
import ROUTE_URLS from "@/constants/route-urls";
import useLanguage from "@/contexts/language-context";
import useGetCourses from "@/hooks/requests/courses/use-get-courses";
import { DashboardMessages } from "@/messages/dashboard.messages";
import { BreadCrumb } from "@/types/page.types";

import CourseCarousel from "./components/carroselComponent";

type DashboardProps = {
  messages: DashboardMessages;
};

export default function Dashboard({ messages }: DashboardProps) {
  const { data: courses, isLoading } = useGetCourses();
  const { lang } = useLanguage();
  const { breadCrumbTitle, pageTitle } = messages;

  const BREAD_CRUMBS: BreadCrumb[] = [{ title: breadCrumbTitle, href: ROUTE_URLS.dashboard(lang) }];

  const {
    margins: { xxxs },
    roundness: { md },
  } = useTheme();

  return (
    <PageLayout messages={messages} title={pageTitle} breadCrumbs={BREAD_CRUMBS} padding={1}>
      <PageContainer>
        <Grid lg={9} md={8} sm={6} xs={12}>
          <Typography variant="h5" gutterBottom fontWeight="bold">
            {pageTitle}
          </Typography>
        </Grid>

        <Grid lg={10} md={12} sm={12} xs={12}>
          <Card style={{ marginTop: xxxs, padding: xxxs, borderRadius: md }}>
            <Grid
              container
              spacing={3}
              style={{ marginTop: xxxs, padding: xxxs, borderRadius: md }}
            >
              <Grid
                lg={6}
                md={6}
                sm={12}
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant="h5" gutterBottom>
                  Aprenda tecnologia de forma divertida e prática, com aulas adaptadas à idade e
                  nível de habilidade, cobrindo programação, robótica, design e muito mais!
                </Typography>
              </Grid>

              <Grid lg={4} md={4} sm={12} xs={12}>
                <Image
                  src={robot}
                  alt="Descrição da Imagem"
                  width={400}
                  height={400}
                  priority={true}
                />
              </Grid>
            </Grid>

            <Grid lg={12} md={12} sm={12} xs={12}>
              <Typography variant="h5" gutterBottom fontWeight="bold">
                Cursos Populares
              </Typography>
            </Grid>

            <Suspense fallback={<CircularProgress />} isSuspended={isLoading}>
              <CourseCarousel courses={courses} />
            </Suspense>

            <br />
            <Grid lg={12} md={12} sm={12} xs={12}>
              <Typography variant="h5" gutterBottom fontWeight="bold">
                Cursos recentes
              </Typography>
            </Grid>

            <Suspense fallback={<CircularProgress />} isSuspended={isLoading}>
              <CourseCarousel courses={courses} />
            </Suspense>

            <Grid lg={12} md={12} sm={12} xs={12} />
          </Card>
        </Grid>
      </PageContainer>
    </PageLayout>
  );
}

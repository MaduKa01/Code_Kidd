"use client";

import AssessmentIcon from "@mui/icons-material/Assessment";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { Box, Card, Grid, Modal, Typography } from "@mui/material";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useState } from "react";

import coursesBannermary from "@/assets/courses/coursesBanner.jpeg";
import PageContainer from "@/components/atoms/PageContainer";
import PageLayout from "@/components/templates/PageLayout";
import ROUTE_URLS from "@/constants/route-urls";
import useLanguage from "@/contexts/language-context";
import useGetCourseById from "@/hooks/requests/courses/use-get-courses-by-id";
import { CoursesDetailsMessages } from "@/messages/courses-details.messages";

type CourseDetailPageProps = {
  messages: CoursesDetailsMessages;
};

export default function CourseDetails({ messages }: CourseDetailPageProps) {
  const { breadCrumbTitle, pageTitle } = messages;
  const { courseId } = useParams();
  const { lang } = useLanguage();
  const { data: course } = useGetCourseById({
    _id: String(courseId || ""),
  });

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <PageLayout
      messages={messages}
      title={pageTitle}
      breadCrumbs={[{ title: breadCrumbTitle, href: ROUTE_URLS.courses(lang) }]}
    >
      <PageContainer>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom fontWeight="bold">
              {pageTitle}
            </Typography>
          </Grid>

          <Grid item lg={7} md={7} sm={12} xs={12}>
            <Card
              style={{ position: "relative", padding: 16, borderRadius: 8 }}
              onClick={handleOpen}
            >
              <Image
                src={coursesBannermary}
                alt={course?.title || ""}
                layout="responsive"
                style={{ objectFit: "cover" }}
              />
              <PlayCircleOutlineIcon
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  fontSize: 60,
                  color: "black",
                }}
              />
            </Card>

            <Modal open={open} onClose={handleClose}>
              <Box
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  padding: 16,
                  backgroundColor: "white",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
                }}
              >
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/McbdxZ3Se2U?si=yLkuHcGX_nPnAGad"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                />
              </Box>
            </Modal>

            <Card style={{ marginTop: 16, padding: 16, borderRadius: 8 }}>
              <Typography variant="h6" gutterBottom>
                Sobre este curso
              </Typography>
              <Grid container alignItems="center" spacing={2}>
                <Grid item>
                  <AssessmentIcon style={{ color: "green" }} />
                </Grid>
                <Grid item>
                  <Typography variant="body1">Iniciante</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ fontWeight: "bold" }}>
                    100 pts
                  </Typography>
                </Grid>
              </Grid>
              <Typography variant="body1" paragraph>
                {course?.description}
              </Typography>
            </Card>
          </Grid>

          <Grid item lg={3.5} md={3.5} sm={12} xs={12}>
            <Card
              style={{ padding: 16, borderRadius: 15, height: "100%", boxSizing: "border-box" }}
            >
              <Grid item xs={12}>
                <Typography variant="h5" gutterBottom fontWeight="bold">
                  Proximas Aulas
                </Typography>
              </Grid>
              {course?.lessons?.map((lesson, index) => (
                <Card
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 16,
                    padding: 16,
                    borderRadius: 8,
                    backgroundColor: "#ececec",
                  }}
                >
                  <Typography variant="body1" gutterBottom>
                    {lesson.lessonTitle}
                  </Typography>

                  <Typography variant="body2">Duração: {lesson.duration}</Typography>
                </Card>
              ))}
            </Card>
          </Grid>
        </Grid>
      </PageContainer>
    </PageLayout>
  );
}

"use client";

import {
  Card,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";

import PageContainer from "@/components/atoms/PageContainer";
import Suspense from "@/components/molecules/Suspense";
import PageLayout from "@/components/templates/PageLayout";
import useGetCourses from "@/hooks/requests/courses/use-get-courses";
import { ICourse } from "@/interfaces/course.interfaces";
import { CoursesMessages } from "@/messages/courses.messages";

import { COURSES_TABLE_COLUMNS } from "./contants";
import CourseCarousel from "../dashboard/components/carroselComponent";

type CoursesProps = {
  messages: CoursesMessages;
};

export default function Courses({ messages }: CoursesProps) {
  const { data: courses, isLoading } = useGetCourses();
  const { pageTitle, listTitle, xpTitle } = messages;

  const {
    margins: { xxxs },
    roundness: { md },
  } = useTheme();

  const columns = COURSES_TABLE_COLUMNS(messages);

  return (
    <PageLayout messages={messages} title={pageTitle} padding={1}>
      <PageContainer>
        <Grid lg={9} md={8} sm={6} xs={12}>
          <Typography variant="h5" gutterBottom fontWeight="bold">
            {listTitle}
          </Typography>
        </Grid>

        <Grid lg={12} md={12} sm={12} xs={12}>
          <Card style={{ marginTop: xxxs, marginBottom: xxxs, padding: xxxs, borderRadius: md }}>
            <Suspense fallback={<CircularProgress />} isSuspended={isLoading}>
              <CourseCarousel courses={courses} />
            </Suspense>
            <Grid lg={12} md={12} sm={12} xs={12} />
          </Card>
        </Grid>

        <Grid lg={12} md={12} sm={12} xs={12}>
          <Typography variant="h5" gutterBottom fontWeight="bold">
            {xpTitle}
          </Typography>
        </Grid>

        <Grid lg={12} md={12} sm={12} xs={12}>
          <Card style={{ marginTop: xxxs, padding: xxxs, borderRadius: md }}>
            <Grid lg={12} md={12} sm={12} xs={12}>
              <Table>
                <TableHead>
                  <TableRow>
                    {columns.map((column, index) => (
                      <TableCell key={`${index}-${column}`}>{column}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {courses?.map((course: ICourse, index: number) => (
                    <TableRow key={`${index}-${course._id}`}>
                      <TableCell>{course.title}</TableCell>
                      <TableCell>{course.category}</TableCell>
                      <TableCell>{course.level}</TableCell>
                      <TableCell>{course.lessons.length} aulas</TableCell>
                      <TableCell>{course.reward} pts</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Grid>
          </Card>
        </Grid>
      </PageContainer>
    </PageLayout>
  );
}

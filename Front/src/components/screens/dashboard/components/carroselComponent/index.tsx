/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import Slider from "react-slick";

import coursesBannermary from "@/assets/courses/coursesBanner.jpeg";
import ROUTE_URLS from "@/constants/route-urls";
import useLanguage from "@/contexts/language-context";
import { ICourse } from "@/interfaces/course.interfaces";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type CourseCarouselProps = {
  courses: any;
};

const CourseCarousel: React.FC<CourseCarouselProps> = ({ courses }) => {
  const { lang } = useLanguage();
  const router = useRouter();

  const settings = {
    dots: true,
    infinite: courses.length > 4,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: courses.length > 4,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {courses.map((course: ICourse, index: number) => (
        <Grid lg={12} md={12} sm={12} xs={12} key={index} sx={{ marginBottom: 10 }}>
          <Card
            sx={{
              borderRadius: 5,
              width: 220,
              height: 300,
              padding: "15px",
              background: "#ECECEC",
              cursor: "pointer",
              margin: "0px 10px",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
            onClick={() => router.push(ROUTE_URLS.courseDetails(lang, String(course._id)))}
          >
            <Image src={coursesBannermary} alt={course.title} width={220} height={150} />
            <Typography variant="body1" fontWeight="bold" sx={{ margin: "10px 0" }}>
              {course.title}
            </Typography>
            <Typography variant="body2">{course.description}</Typography>
            <Grid container justifyContent="flex-end" alignItems="center" spacing={2}>
              <Typography variant="caption">{course.rating} ⭐️</Typography>
            </Grid>
          </Card>
        </Grid>
      ))}
    </Slider>
  );
};

export default CourseCarousel;

"use client";

import { useTheme } from "@mui/material";
import Image, { StaticImageData } from "next/image";

import NoDataImage from "@/assets/error/no-data-found.jpg";

import { AlertBlockContainer, AlertBlockDescription, AlertBlockTitle } from "./styles";

type AlertBlockProps = {
  src?: StaticImageData;
  title: string;
  description?: string;
  alt: string;
};
export default function AlertBlock({
  src = NoDataImage,
  title,
  description,
  alt,
}: AlertBlockProps) {
  const {
    margins: { huge },
  } = useTheme();
  const WIDTH = huge * 2;
  const HEIGHT = huge * 2;
  return (
    <AlertBlockContainer>
      <Image width={WIDTH} height={HEIGHT} src={src} alt={alt} priority />
      <AlertBlockTitle>{title}</AlertBlockTitle>
      {description && <AlertBlockDescription>{description}</AlertBlockDescription>}
    </AlertBlockContainer>
  );
}

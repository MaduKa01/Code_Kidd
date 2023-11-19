import { useEffect, useState } from "react";

import { FileTypes } from "@/types/files.types";

interface FileTypeResult {
  type: FileTypes;
  previewSrc: string | undefined;
}

export function useFileType(file: File): FileTypeResult {
  const [result, setResult] = useState<FileTypeResult>({
    type: FileTypes.UNKNOWN,
    previewSrc: undefined,
  });

  useEffect(() => {
    if (file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setResult({
          type: FileTypes.IMAGE,
          previewSrc: e.target?.result as string,
        });
      };
      reader.readAsDataURL(file);
    } else {
      switch (file.type) {
        case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
          setResult({ type: FileTypes.SHEET, previewSrc: undefined });
          break;
        case "application/pdf":
          setResult({ type: FileTypes.PDF, previewSrc: undefined });
          break;
        case "text/plain":
          setResult({ type: FileTypes.TEXT, previewSrc: undefined });
          break;
        default:
          setResult({ type: FileTypes.UNKNOWN, previewSrc: undefined });
      }
    }
  }, [file]);

  return result;
}

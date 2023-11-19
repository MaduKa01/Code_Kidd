import dynamic from "next/dynamic";

import CourseDetails from "@/components/screens/courseDetails";
import COURSES_DETAILS_MESSAGES, {
  CoursesDetailsMessages,
} from "@/messages/courses-details.messages";
import translationService from "@/services/translation.service";
import { LanguageParam, Params } from "@/types/params.types";

export interface PageProps extends Params<LanguageParam> {}

async function Page({ params }: PageProps) {
  const { lang } = params;

  const translations: CoursesDetailsMessages = await translationService.get<CoursesDetailsMessages>(
    COURSES_DETAILS_MESSAGES,
    lang
  );

  return <CourseDetails messages={translations} />;
}

export default dynamic(() => Promise.resolve(Page), { ssr: false });

import dynamic from "next/dynamic";

import Courses from "@/components/screens/course";
import { COURSES_MESSAGES, CoursesMessages } from "@/messages/courses.messages";
import translationService from "@/services/translation.service";
import { LanguageParam, Params } from "@/types/params.types";

export interface PageProps extends Params<LanguageParam> {}

async function Page({ params }: PageProps) {
  const { lang } = params;

  const translations: CoursesMessages = await translationService.get<CoursesMessages>(
    COURSES_MESSAGES,
    lang
  );

  return <Courses messages={translations} />;
}

export default dynamic(() => Promise.resolve(Page), { ssr: false });

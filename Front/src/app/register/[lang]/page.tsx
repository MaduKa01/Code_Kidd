import dynamic from "next/dynamic";

import Register from "@/components/screens/Register";
import REGISTER_MESSAGES, { RegisterMessages } from "@/messages/register.messages";
import translationService from "@/services/translation.service";
import { LanguageParam, Params } from "@/types/params.types";

export interface PageProps extends Params<LanguageParam> {}

async function Page({ params }: PageProps) {
  const { lang } = params;

  const translations: RegisterMessages = await translationService.get<RegisterMessages>(
    REGISTER_MESSAGES,
    lang
  );

  return <Register messages={translations} />;
}

export default dynamic(() => Promise.resolve(Page), { ssr: false });

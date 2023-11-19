import dynamic from "next/dynamic";

import Profile from "@/components/screens/Profile";
import PROFILE_MESSAGES, { ProfileMessages } from "@/messages/profile.messages";
import translationService from "@/services/translation.service";
import { LanguageParam, Params } from "@/types/params.types";

export interface PageProps extends Params<LanguageParam> {}

async function Page({ params }: PageProps) {
  const { lang } = params;

  const translations: ProfileMessages = await translationService.get<ProfileMessages>(
    PROFILE_MESSAGES,
    lang
  );

  return <Profile messages={translations} />;
}

export default dynamic(() => Promise.resolve(Page), { ssr: false });

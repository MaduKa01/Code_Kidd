import { Metadata as NextMetadata } from "next";

import { PROFILE_METADATA } from "@/messages/profile.messages";
import translationService from "@/services/translation.service";
import { LanguageParam, Params } from "@/types/params.types";

export async function generateMetadata({ params }: Params<LanguageParam>): Promise<NextMetadata> {
  const { lang } = params;
  const metadata = await translationService.get(PROFILE_METADATA, lang);
  return metadata;
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

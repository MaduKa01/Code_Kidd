import { Metadata as NextMetadata } from "next";

import { LOGIN_METADATA } from "@/messages/login.messages";
import translationService from "@/services/translation.service";
import { LanguageParam, Params } from "@/types/params.types";

export async function generateMetadata({ params }: Params<LanguageParam>): Promise<NextMetadata> {
  const { lang } = params;
  const metadata = await translationService.get(LOGIN_METADATA, lang);
  return metadata;
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

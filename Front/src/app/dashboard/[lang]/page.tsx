import dynamic from "next/dynamic";

import Dashboard from "@/components/screens/dashboard";
import DASHBOARD_MESSAGES, { DashboardMessages } from "@/messages/dashboard.messages";
import translationService from "@/services/translation.service";
import { LanguageParam, Params } from "@/types/params.types";

export interface PageProps extends Params<LanguageParam> {}

async function Page({ params }: PageProps) {
  const { lang } = params;

  const translations: DashboardMessages = await translationService.get<DashboardMessages>(
    DASHBOARD_MESSAGES,
    lang
  );

  return <Dashboard messages={translations} />;
}

export default dynamic(() => Promise.resolve(Page), { ssr: false });

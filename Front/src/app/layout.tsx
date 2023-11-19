import { Roboto } from "next/font/google";

import { AuthProvider } from "@/contexts/auth-context";
import { LanguageProvider } from "@/contexts/language-context";
import { ToastProvider } from "@/contexts/toast-context";
import LoadingProvider from "@/providers/loading-provider";
import LocalizationProvider from "@/providers/localization-provider";
import StyleProviders from "@/providers/style-providers";

export const metadata = {
  title: "Talk2Buy",
  description: "Talk2Buy",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={roboto.variable} style={{ margin: 0 }} suppressHydrationWarning>
        <StyleProviders>
          <LoadingProvider>
            <LanguageProvider>
              <LocalizationProvider>
                <ToastProvider>
                  {children ? <AuthProvider>{<>{children}</>}</AuthProvider> : <>{children}</>}
                </ToastProvider>
              </LocalizationProvider>
            </LanguageProvider>
          </LoadingProvider>
        </StyleProviders>
      </body>
    </html>
  );
}

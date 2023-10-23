"use client";

import "../styles/common/globals.css";
import { Roboto } from "next/font/google";
import { IntlProvider } from "react-intl";
import { en, mn } from "@/locales";
import { useEffect, useState } from "react";
import { Footer, Header } from "@/components";
import { ChakraProvider } from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";
import { theme } from "@/themes/themes";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: "normal",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [locale, setLocale] = useState("en");

  const messages: any = {
    mn: mn,
    en: en,
  };

  useEffect(() => {
    const l = localStorage.getItem("language_local");

    if (l) {
      setLocale(l);
    } else {
      localStorage.setItem("language_local", "en");
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Хаан Даатгал</title>
        <meta name="description" content="Description" />
        <link rel="icon" href="/favicon/favicon.ico" />
      </head>
      <body className={roboto.className}>
        <IntlProvider
          messages={messages[locale]}
          locale={locale}
          defaultLocale="en"
        >
          <CacheProvider>
            <ChakraProvider theme={theme}>
              <Header locale={locale} setLocale={setLocale} />
              <div className="pt-[24.49vh]">{children}</div>
              <Footer />
            </ChakraProvider>
          </CacheProvider>
        </IntlProvider>
      </body>
    </html>
  );
}

"use client";

import "../styles/common/globals.css";
import { Roboto } from "next/font/google";
import { IntlProvider } from "react-intl";
import { en, mn } from "@/locales";
import { Suspense, useEffect, useState } from "react";
import { Footer, Header } from "@/components";
import { ChakraProvider } from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";
import { theme } from "@/themes/themes";
import Loading from "./loading";
import { Analytics } from "@vercel/analytics/react";

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
        <meta
          property="og:description"
          content="Монголын үндэсний хөрөнгө оруулагчид үүсгэн байгуулсан бөгөөд даатгалын зах зээлд амжилттай үйл ажиллагаа явуулж байна."
        />
        <link rel="icon" href="/favicon.ico" />
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
              <Suspense fallback={<Loading />}>
                {children}
                <Analytics />
              </Suspense>
              <Footer />
            </ChakraProvider>
          </CacheProvider>
        </IntlProvider>
      </body>
    </html>
  );
}

"use client";

import { Footer, Header } from "@/components";
import { en, mn } from "@/locales";
import { theme } from "@/themes/themes";
import GoogleAnalytics from "@bradgarropy/next-google-analytics";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { Analytics } from "@vercel/analytics/react";
import { Roboto } from "next/font/google";
import { Suspense, useEffect, useState } from "react";
import { IntlProvider, useIntl } from "react-intl";
import "../styles/common/globals.css";
import Loading from "./loading";


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
  const [locale, setLocale] = useState("mn");

  const title  = locale == "mn" ? "Хаан даатгал" : "Khaan insurance";
  const messages: any = {
    mn: mn,
    en: en,
  };
  if (typeof window !== "undefined") {
    window.onbeforeunload = () => {
      localStorage.setItem("language_local", "mn");
    };
  }

  useEffect(() => {
    const l = localStorage.getItem("language_local");

    if (l) {
      setLocale(l);
    } else {
      localStorage.setItem("language_local", "mn");
    }
  }, []);

  return (
    <html lang="mn">
      <head>
        <title>{title}</title>
        <meta
          property="og:description"
          content="Монголын үндэсний хөрөнгө оруулагчид үүсгэн байгуулсан бөгөөд даатгалын зах зээлд амжилттай үйл ажиллагаа явуулж байна."
        />
        <link rel="icon" href="/favicon.ico" />
        <GoogleAnalytics measurementId="G-927S2DH3VL" />
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

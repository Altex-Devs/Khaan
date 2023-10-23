"use client";

import '../styles/common/globals.css'
import { Open_Sans } from "next/font/google";
import { IntlProvider } from "react-intl";
import { en, mn } from "@/locales";
import { useEffect, useState } from "react";
import { Footer, Header } from "@/components";

const openSans = Open_Sans({
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
      <body className={openSans.className}>
        <IntlProvider
          messages={messages[locale]}
          locale={locale}
          defaultLocale="en"
        >
          <Header locale={locale} setLocale={setLocale} />
          <div className="pt-[24.49vh]">{children}</div>
          <Footer />
        </IntlProvider>
      </body>
    </html>
  );
}

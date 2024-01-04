import "@/locales/i18n";

import "simplebar-react/dist/simplebar.min.css";
// editor
import "react-quill/dist/quill.snow.css";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "react-color-palette/css";

import React from "react";
import { NextPage } from "next";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { CacheProvider, EmotionCache } from "@emotion/react";
import ThemeProvider from "@/theme";
import { SettingsProvider } from "@/components/settings";
import createEmotionCache from "@/utils/createEmotionCache";
import ProgressBar from "@/components/progress-bar";
import MotionLazy from "@/components/animate/motion-lazy";
import { SnackbarProvider } from "@/components/snackbar";
import { LocalizationProvider } from "@/locales";

const clientSideEmotionCache = createEmotionCache();

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
  Component: NextPageWithLayout;
}

export default function App(props: MyAppProps) {
  const {
    Component,
    pageProps: { session, ...pageProps },
    emotionCache = clientSideEmotionCache,
  } = props;

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="description" content="Wonderraw Shop" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title> Shop | Wonderraw</title>
      </Head>

      <LocalizationProvider>
        <SettingsProvider>
          <ThemeProvider>
            <SessionProvider session={session}>
              <MotionLazy>
                <SnackbarProvider>
                  <ProgressBar />
                  {getLayout(<Component {...pageProps} />)}
                </SnackbarProvider>
              </MotionLazy>
            </SessionProvider>
          </ThemeProvider>
        </SettingsProvider>
      </LocalizationProvider>
    </CacheProvider>
  );
}

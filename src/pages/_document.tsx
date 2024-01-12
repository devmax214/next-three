import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import createEmotionCache from "@/utils/createEmotionCache";
import createEmotionServer from "@emotion/server/create-instance";
import { fontList } from '@/helpers/common';

export default function MyDocument({
  emotionStyleTags,
}: {
  emotionStyleTags: any;
}) {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {fontList.map((font: any, i: number) => (
          <link key={font.family} href={`https://fonts.googleapis.com/css2?family=${font.family}&display=swap`} rel="stylesheet" />
        ))}
        {emotionStyleTags}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const originalRenderPage = ctx.renderPage;

  const cache = createEmotionCache();

  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: any) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />;
        },
    });

  const initialProps = await Document.getInitialProps(ctx);

  const emotionStyles = extractCriticalToChunks(initialProps.html);

  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(" ")}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  };
};

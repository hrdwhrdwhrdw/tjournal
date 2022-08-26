import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { AppProps } from "next/app";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";

import Header from "../components/Header/index";
import { wrapper } from "../redux/store";
import { theme } from "../theme";

import "macro-css";
import "../styles/globals.scss";
import { setUserData } from "../redux/users/userSlice";
import { Api } from "../utils/api";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>RJournal</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <NextNProgress
          color="#fcae41"
          startPosition={0.3}
          stopDelayMs={200}
          height={4}
          showOnShallow={true}
        />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

App.getInitialProps = wrapper.getInitialAppProps(
  (store) =>
    async ({ ctx, Component }) => {
      try {
        const userData = await Api(ctx).user.getMe();
        store.dispatch(setUserData(userData));
      } catch (error) {
        if (ctx.asPath === "/write") {
          ctx.res?.writeHead(302, {
            Location: "/403",
          });
          ctx.res?.end();
        }
        console.log(error);
      }
      return {
        pageProps: {
          ...(Component.getInitialProps
            ? await Component.getInitialProps({ ...ctx, store })
            : {}),
        },
      };
    }
);

export default wrapper.withRedux(App);

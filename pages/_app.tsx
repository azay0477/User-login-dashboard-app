import "@/styles/globals.css";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { wrapper, store } from "../store/store";
import { Provider } from "react-redux";
import "../styles/globals.css";


function App({
  Component,
  pageProps,
}: AppProps<{
  session: Session;
}>) {
  return (
    <>
    
    <div>
      <link rel="stylesheet" href="/styles/global.css" />
    </div>
    <Provider store={store}>
        <SessionProvider session={pageProps.session}>
          <Component {...pageProps} />
        </SessionProvider>
      </Provider>
      </>
  );
}

export default wrapper.withRedux(App);

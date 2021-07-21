import App from "next/app";
import Head from "next/head";
import "ress";
import { Provider } from "react-redux";
import { store } from "~/store";
import { AssetContext, useGlobal } from "~/store/hooks/global";

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    const { assets } = useGlobal();

    return (
      <AssetContext.Provider value={{ assets }}>
        <Head>
          <title>Next App</title>
        </Head>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </AssetContext.Provider>
    );
  }
}

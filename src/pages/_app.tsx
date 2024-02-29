import { type AppType } from "next/app";

import { api } from "auralyticsnextjs/utils/api";

import "auralyticsnextjs/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default api.withTRPC(MyApp);

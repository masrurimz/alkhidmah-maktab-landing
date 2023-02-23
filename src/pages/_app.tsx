import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import MaktabHelp from "~/features/maktab/MaktabHelp/MaktabHelp";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <MaktabHelp />
    </>
  );
};

export default api.withTRPC(MyApp);

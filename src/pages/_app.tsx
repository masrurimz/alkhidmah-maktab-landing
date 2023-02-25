import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import MaktabHelp from "~/features/maktab/MaktabHelp/MaktabHelp";
import MaktabMaps from "~/features/maktab/MaktabMaps/MaktabMaps";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <MaktabHelp />
      <MaktabMaps />
    </>
  );
};

export default api.withTRPC(MyApp);

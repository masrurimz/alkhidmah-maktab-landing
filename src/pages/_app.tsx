import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import MaktabHelp from "~/features/maktab/MaktabHelp/MaktabHelp";
import MaktabMaps from "~/features/maktab/MaktabMaps/MaktabMaps";
import MainHeader from "~/common/components/navigation/MainHeader";
import MaktabLive from "~/features/maktab/MaktabLive/MaktabLive";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <MainHeader />
      <Component {...pageProps} />
      <MaktabHelp />
      <MaktabMaps />
      <MaktabLive />
    </>
  );
};

export default api.withTRPC(MyApp);

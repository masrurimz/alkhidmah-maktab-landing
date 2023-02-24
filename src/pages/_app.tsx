import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import MaktabHelp from "~/features/maktab/MaktabHelp/MaktabHelp";
import MaktabMaps from "~/features/maktab/MaktabMaps/MaktabMaps";
import MainHeader from "~/common/components/navigation/MainHeader";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <MainHeader />
      <Component {...pageProps} />
      <MaktabHelp />
      <MaktabMaps />
    </>
  );
};

export default api.withTRPC(MyApp);

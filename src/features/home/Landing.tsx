import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Logo from "../../assets/images/logo.webp";
import InputSearchBox from "~/common/components/InputSearchBox";
import { useMaktabHelpStore } from "../maktab/MaktabHelp/maktabHelp.store";
import { useMaktabMapsStore } from "../maktab/MaktabMaps/maktabMaps.store";

function Landing() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const openSearchPage = () => {
    void router.push(`/search?q=${query}`);
  };

  const openHelp = useMaktabHelpStore((state) => state.showModal);
  const openMaps = useMaktabMapsStore((state) => state.showModal);

  return (
    <div className="flex h-screen flex-1 flex-col justify-center gap-10 p-5">
      <div className="relative aspect-square self-center md:h-44 md:w-44">
        <Image
          src={Logo}
          alt="Picture of the author"
          fill
          className="rounded-full"
          sizes="32"
        />
      </div>
      <div className="flex flex-col gap-5">
        <span className="text-center text-5xl font-semibold text-black">
          Temukan Maktab Anda
        </span>
        <span className="text-center font-normal text-gray-500">
          Cari berdasarkan <b>Kota</b>, <b>Kecamatan</b>, atau Nama{" "}
          <b>Koordinator</b> yang digunakan saat pendaftaran maktab
        </span>
      </div>
      <div className="flex flex-col gap-5">
        <InputSearchBox
          onChangeText={setQuery}
          onPressButton={openSearchPage}
          value={query}
        />
        <button
          type="button"
          className="mr-2 mb-2 rounded-lg border border-gray-200 bg-white py-2.5 px-5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
          onClick={() => openMaps()}
        >
          Lihat Peta Maktab
        </button>
        <button
          className="text-base font-bold text-blue-600 hover:underline"
          onClick={() => openHelp()}
        >
          Bantuan
        </button>
      </div>
    </div>
  );
}

export default Landing;

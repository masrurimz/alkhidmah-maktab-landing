import { useRouter } from "next/router";
import React, { useState } from "react";
import InputSearchBox from "~/common/components/InputSearchBox";
import { useMaktabHelpStore } from "../maktab/MaktabHelp/maktabHelp.store";

function Landing() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const openSearchPage = () => {
    void router.push(`/search?q=${query}`);
  };

  const openHelp = useMaktabHelpStore((state) => state.showModal);

  return (
    <div className="flex h-screen flex-1 flex-col justify-center gap-10 p-5">
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

import { useRouter } from "next/router";
import React, { useState } from "react";

function Landing() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const openSearchPage = () => {
    void router.push(`/search?q=${query}`);
  };

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
        <input
          className="rounded-xl border px-5 py-3"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Kota, kecamatan, atau koordinator"
        />
        <button
          className="rounded-xl bg-blue-600 px-4 py-2 text-base font-bold text-white"
          onClick={openSearchPage}
        >
          Cari
        </button>
        <button className="text-base font-bold text-blue-600 hover:underline">
          Bantuan
        </button>
      </div>
    </div>
  );
}

export default Landing;

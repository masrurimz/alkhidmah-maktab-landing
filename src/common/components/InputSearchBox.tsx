import React from "react";

interface InputSearchBoxProps {
  value: string;
  onChangeText: (value: string) => void;
  onPressButton: () => void;
}

function InputSearchBox(props: InputSearchBoxProps) {
  const { onChangeText, value, onPressButton } = props;

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <svg
          aria-hidden="true"
          className="h-5 w-5 text-gray-500 dark:text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>
      <input
        type="search"
        id="search"
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        placeholder="Kota, kecamatan, atau koordinator"
        required
        value={value}
        onChange={(e) => onChangeText(e.target.value)}
      />
      <button
        type="submit"
        className="absolute right-2.5 bottom-2.5 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={(e) => {
          e.preventDefault();
          onPressButton();
        }}
      >
        Cari
      </button>
    </div>
  );
}

export default InputSearchBox;
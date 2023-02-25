import { type maktab } from "@prisma/client";
import { Spinner } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useAdminMaktabPrintStore } from "../../AdminMaktabPrint/adminMaktabPrint.store";
import useAdminMaktabListQuery from "../../hooks/useAdminMaktabListQuery";
import { useAdminMaktabListStore } from "../adminMaktabList.store";

interface TableHeaderProps {
  maktabData: maktab[];
}

function TableHeader(props: TableHeaderProps) {
  const { maktabData } = props;

  const [isActionVisible, setIsActionVisible] = useState(false);

  const selected = useAdminMaktabListStore((s) => s.selected);
  const selectedCount = Object.values(selected).reduce(
    (sum, val) => sum + Number(val),
    0
  );

  const setPrintData = useAdminMaktabPrintStore((s) => s.setPrintData);
  const print = () => {
    const printData = maktabData.filter((m) => selected[m.id]);

    setPrintData(printData);
  };

  const { query, setQuery, isLoading } = useAdminMaktabListQuery();

  return (
    <div className="flex items-center justify-between bg-white py-4 px-5 dark:bg-gray-800">
      <div>
        <button
          id="dropdownActionButton"
          data-dropdown-toggle="dropdownAction"
          className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          type="button"
          onClick={() => setIsActionVisible((v) => !v)}
        >
          <span className="sr-only">Action button</span>
          Action {selectedCount ? `${selectedCount} selected` : ""}
          <svg
            className="ml-2 h-3 w-3"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        {/* <!-- Dropdown menu --> */}
        <div
          id="dropdownAction"
          className={`z-10 w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:divide-gray-600 dark:bg-gray-700 ${
            isActionVisible ? "" : "hidden"
          }`}
        >
          <ul
            className="py-1 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownActionButton"
          >
            <li>
              <div
                role="button"
                aria-pressed="false"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={() => print()}
              >
                Print
              </div>
            </li>
            {/* <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                CheckIn
              </a>
            </li> */}
          </ul>
          {/* <div className="py-1">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Delete User
            </a>
          </div> */}
        </div>
      </div>
      <label htmlFor="table-search" className="sr-only">
        Search
      </label>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          {isLoading ? (
            <Spinner />
          ) : (
            <svg
              className="h-5 w-5 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              />
            </svg>
          )}
        </div>
        <input
          type="text"
          id="table-search-users"
          className="block w-80 rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Search for users"
          value={query}
          onChange={(e) => setQuery(e.currentTarget.value)}
        />
      </div>
    </div>
  );
}

export default TableHeader;

import { type maktab } from "@prisma/client";
import dayjs from "dayjs";
import { Spinner } from "flowbite-react";
import React from "react";
import { api } from "~/utils/api";
import { useAdminMaktabPrintStore } from "../../AdminMaktabPrint/adminMaktabPrint.store";

type TTableRowProps = maktab & {
  onClickEdit: (data: maktab) => void;
};

function TableRow(props: TTableRowProps) {
  const {
    contingentAddress,
    contingentCoordinatorName,
    contingentCoordinatorPhone,
    contingentCount,
    maktabAddress,
    maktabCapacity,
    maktabOwnerName,
    maktabOwnerPhone,
    sector,
    onClickEdit,
    checkInAt,
    id,
  } = props;

  const utils = api.useContext();
  const checkIn = api.maktab.checkinById.useMutation({
    onSuccess() {
      void utils.maktab.invalidate();
    },
  });

  const openPrintDialog = useAdminMaktabPrintStore((s) => s.setPrintData);
  const print = (data: maktab) => {
    openPrintDialog(data);
  };

  return (
    <tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
      <td className="w-4 p-4">
        <div className="flex items-center">
          <input
            id="checkbox-table-search-1"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
          />
          <label htmlFor="checkbox-table-search-1" className="sr-only">
            checkbox
          </label>
        </div>
      </td>

      <td className="px-6 py-4">
        <div className="flex items-baseline gap-1 font-medium">
          {maktabOwnerName}{" "}
          <div className="text-sm text-gray-500">({maktabOwnerPhone})</div>
        </div>
        <div className="font-normal text-gray-500">{maktabAddress}</div>
      </td>
      <td className="px-6 py-4">{maktabCapacity}</td>

      <td className="px-6 py-4">
        <div className="flex items-baseline gap-1 font-medium">
          {contingentCoordinatorName}{" "}
          <div className="text-sm text-gray-500">
            ({contingentCoordinatorPhone})
          </div>
        </div>
        <div className="font-normal text-gray-500">{contingentAddress}</div>
      </td>
      <td className="px-6 py-4">{contingentCount}</td>

      <td className="px-6 py-4">{sector}</td>

      <td className="px-6 py-4">
        {checkInAt instanceof Date ? (
          <div className="flex items-center">
            <div className="mr-2 h-3 w-2.5 rounded-full bg-green-500"></div>{" "}
            {dayjs(checkInAt).format("DD MMM hh:mm")}
          </div>
        ) : (
          <div
            className="font-medium text-blue-600 hover:underline dark:text-blue-500"
            role="button"
            aria-pressed="false"
            onClick={() => checkIn.mutate(id)}
          >
            {checkIn.isLoading ? (
              <>
                <Spinner size="sm" />
                Checking in...
              </>
            ) : (
              "Check In"
            )}
          </div>
        )}
      </td>
      <td className="px-6 py-4">
        <div
          role="button"
          aria-pressed="false"
          onClick={() => print(props)}
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          Print
        </div>
      </td>
    </tr>
  );
}

export default TableRow;

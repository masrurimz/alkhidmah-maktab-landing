import { maktab } from "@prisma/client";
import { useAdminMaktabStore } from "../../adminMaktab.store";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

interface TableProps {
  data: maktab[] | undefined;
}

function Table(props: TableProps) {
  const { data } = props;

  const showFormModal = useAdminMaktabStore((s) => s.showFormModal);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <TableHeader />
      <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
        <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
                />
                <label htmlFor="checkbox-all-search" className="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              Rumah
            </th>
            <th scope="col" className="px-6 py-3">
              Kapasitas
            </th>
            <th scope="col" className="px-6 py-3">
              Rombongan
            </th>
            <th scope="col" className="px-6 py-3">
              Jumlah
            </th>

            <th scope="col" className="px-6 py-3">
              Sektor
            </th>

            <th scope="col" className="px-6 py-3">
              Check In
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((m) => (
            <TableRow
              {...m}
              key={m.id}
              onClickEdit={(m) => showFormModal(m.id)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;

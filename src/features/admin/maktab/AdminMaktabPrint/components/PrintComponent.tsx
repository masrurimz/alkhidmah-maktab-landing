import { maktab } from "@prisma/client";
import React, { forwardRef, LegacyRef } from "react";
import MaktabData from "./MaktabData";

interface PrintComponentProps {
  data: maktab[];
}

const PrintComponent = forwardRef<HTMLDivElement, PrintComponentProps>(
  (props, ref) => {
    const { data } = props;

    return (
      <div ref={ref}>
        <table className="w-full text-left text-base text-gray-500 dark:text-gray-400">
          {/* <div key={e.id} className="space-y-5"> */}
          {data?.map((e) => (
            <>
              <thead className="bg-gray-50 text-base uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                <th scope="col" className="px-6 py-3">
                  Rombongan
                </th>
                <th />
                <th scope="col" className="px-6 py-3">
                  Maktab
                </th>
                <th />
              </thead>
              <tbody>
                <tr>
                  <MaktabData label="Asal" value={e.contingentAddress} />
                  <MaktabData label="Alamat Maktab" value={e.maktabAddress} />
                </tr>
                <tr>
                  <MaktabData
                    label="Koordinator"
                    value={e.contingentCoordinatorName}
                  />
                  <MaktabData
                    label="Tuan Rumah Maktab"
                    value={e.maktabOwnerName}
                  />
                </tr>
                <tr>
                  <MaktabData
                    label="No. Telp Koor"
                    value={e.contingentCoordinatorPhone}
                  />
                  <MaktabData
                    label="No. Telp Tuan Rumah"
                    value={e.contingentCoordinatorPhone}
                  />
                </tr>
                <tr>
                  <MaktabData
                    label="Jumlah Rombongan"
                    value={e.contingentCount}
                  />
                  <MaktabData
                    label="Kapasitas Maktab"
                    value={e.maktabCapacity}
                  />
                </tr>
              </tbody>
            </>
          ))}
          {/* </div> */}
        </table>
      </div>
    );
  }
);
PrintComponent.displayName = "PrintComponent";

export default PrintComponent;

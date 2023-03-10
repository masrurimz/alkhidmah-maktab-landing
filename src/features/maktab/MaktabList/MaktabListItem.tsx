import React from "react";
import MaktabListDatum from "./MaktabListDatum";

interface MaktabListItemProps {
  contingentAddress: string;
  contingentCoordinator: string;
  contingentCoordinatorPhone: string;
  maktabOwnerName: string;
  maktabOwnerPhone: string;
  maktabAddress: string;
  maktabSector: string;
}

function MaktabListItem(props: MaktabListItemProps) {
  const {
    contingentAddress,
    contingentCoordinator,
    contingentCoordinatorPhone,
    maktabAddress,
    maktabOwnerName,
    maktabOwnerPhone,
    maktabSector,
  } = props;

  return (
    <div className="flex items-center border-b py-2">
      <div className="flex flex-1 flex-col ">
        <MaktabListDatum label="Asal Rombongan:" value={contingentAddress} />
        <MaktabListDatum label="Koor:" value={contingentCoordinator} />
        <MaktabListDatum
          label="Kontak Koor:"
          value={contingentCoordinatorPhone}
        />
        <MaktabListDatum label="Tuan Rumah:" value={maktabOwnerName} />
        <MaktabListDatum label="Kontak Tuan Rumah:" value={maktabOwnerPhone} />
        <MaktabListDatum label="Alamat Maktab:" value={maktabAddress} />
      </div>
      <div className="flex flex-col items-center justify-center rounded-2xl bg-blue-50 py-2 px-3">
        <p className="text-[10px] font-medium text-gray-700">Sektor</p>
        <p className="text-xl font-bold">{maktabSector}</p>
      </div>
    </div>
  );
}

export default MaktabListItem;

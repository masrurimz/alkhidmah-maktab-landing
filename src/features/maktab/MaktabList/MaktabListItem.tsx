import React from "react";
import MaktabListDatum from "./MaktabListDatum";

interface MaktabListItemProps {
  contingentAddress: string;
  contingentCoordinator: string;
  maktabOwnerName: string;
  maktabAddress: string;
  maktabSector: string;
}

function MaktabListItem(props: MaktabListItemProps) {
  const {
    contingentAddress,
    contingentCoordinator,
    maktabAddress,
    maktabOwnerName,
    maktabSector,
  } = props;

  return (
    <div className="flex items-center border-b py-2">
      <div className="flex flex-1 flex-col ">
        <MaktabListDatum label="Asal Rombongan:" value={contingentAddress} />
        <span>{contingentCoordinator}</span>
        <MaktabListDatum label="Tuan Rumah:" value={maktabOwnerName} />
        <MaktabListDatum label="Alamat Maktab:" value={maktabAddress} />
      </div>
      <div className="flex flex-col items-center justify-center rounded-2xl bg-blue-100 py-2 px-3">
        <div className="text-[10px] font-medium text-gray-700">Sektor</div>
        <div className="text-xl font-bold">{maktabSector}</div>
      </div>
    </div>
  );
}

export default MaktabListItem;

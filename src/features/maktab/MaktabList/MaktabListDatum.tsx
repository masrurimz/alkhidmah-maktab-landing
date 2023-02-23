import React from "react";

interface MaktabListDatumProps {
  label: string;
  value: string;
}

function MaktabListDatum(props: MaktabListDatumProps) {
  const { label, value } = props;

  return (
    <div className="flex flex-row gap-1">
      <div className="text-[10px] font-medium text-gray-400">{label}</div>
      <div className="text-xs">{value}</div>
    </div>
  );
}

export default MaktabListDatum;

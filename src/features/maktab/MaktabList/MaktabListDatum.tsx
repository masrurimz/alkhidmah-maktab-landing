import React from "react";

interface MaktabListDatumProps {
  label: string;
  value: string;
}

function MaktabListDatum(props: MaktabListDatumProps) {
  const { label, value } = props;

  return (
    <div className="flex flex-row gap-1">
      <p className="text-[10px] font-medium text-gray-400">{label}</p>
      <p className="line inline text-ellipsis text-[10px] font-medium">
        {value}
      </p>
    </div>
  );
}

export default MaktabListDatum;

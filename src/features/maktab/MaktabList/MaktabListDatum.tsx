import React from "react";

interface MaktabListDatumProps {
  label: string;
  value: string;
  extraValue?: string;
}

function MaktabListDatum(props: MaktabListDatumProps) {
  const { label, value, extraValue } = props;

  return (
    <div className="flex flex-row gap-1">
      <p className="text-[10px] font-medium text-gray-400">{label}</p>
      <p className="line inline text-ellipsis text-[10px] font-medium">
        {value}{" "}
        <p className="inline text-gray-400">
          {extraValue ? `(${extraValue})` : ""}
        </p>
      </p>
    </div>
  );
}

export default MaktabListDatum;

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
      <p className="text-[10px] font-medium text-gray-400">
        {label}{" "}
        <p className="line inline text-ellipsis text-xs font-medium text-gray-700">
          {value}{" "}
          <p className="inline text-gray-400">
            {extraValue ? `(${extraValue})` : ""}
          </p>
        </p>
      </p>
    </div>
  );
}

export default MaktabListDatum;

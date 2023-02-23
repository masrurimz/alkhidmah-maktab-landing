import React from "react";

export interface SectorCoordinatorProps {
  name: string;
  phone: string;
  sector: string;
  link: string;
}

function SectorCoordinator(props: SectorCoordinatorProps) {
  const { name, phone, sector, link } = props;

  return (
    <li>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center rounded-lg bg-gray-50 p-3 text-sm font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"
      >
        <div className="flex flex-1 flex-col">
          <span className="ml-3 flex-1 whitespace-nowrap">{name}</span>
          <span className="ml-3 flex-1 whitespace-nowrap text-xs font-medium text-gray-400">
            {phone}
          </span>
        </div>
        <span className="ml-3 inline-flex items-center justify-center rounded bg-gray-200 px-2 py-0.5 text-xs font-medium text-gray-500 dark:bg-gray-700 dark:text-gray-400">
          Sektor {sector}
        </span>
      </a>
    </li>
  );
}

export default SectorCoordinator;

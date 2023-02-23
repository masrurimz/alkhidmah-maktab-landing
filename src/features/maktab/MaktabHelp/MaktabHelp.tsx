import { useMaktabHelpStore } from "./maktabHelp.store";
import SectorCoordinator, {
  type SectorCoordinatorProps,
} from "./SectorCoordinator";

const SECTOR_COORDINATOR: SectorCoordinatorProps[] = [
  {
    name: "Asrori Abdul Syakur",
    phone: "+62 858-6948-6459",
    sector: "A",
    link: "https://wa.me/6285869486459",
  },
  {
    name: "Abdul Hamid",
    phone: "+62 857-0762-8396",
    sector: "B",
    link: "https://wa.me/6285707628396",
  },
  {
    name: "Ahmad Syukron",
    phone: "+62 877-4336-6770 ",
    sector: "C",
    link: "https://wa.me/6287743366770",
  },
  {
    name: "Muhril Tosi",
    phone: "+62 813-5951-1182",
    sector: "D",
    link: "https://wa.me/6281359511182",
  },
];

function MaktabHelp() {
  const isVisible = useMaktabHelpStore((state) => state.isModalVisible);
  const hideModal = useMaktabHelpStore((state) => state.hideModal);

  return (
    <div
      id="modal"
      aria-hidden="true"
      className={`h-modal fixed top-0 left-0 right-0 z-50 w-full overflow-y-auto ${
        !isVisible ? "hidden" : ""
      } overflow-x-hidden p-4 md:inset-0 md:h-full`}
    >
      <div className="relative h-full w-full max-w-md md:h-auto">
        {/* <!-- Modal content --> */}
        <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
          <button
            type="button"
            className="absolute top-3 right-2.5 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"
            data-modal-hide="modal"
            onClick={() => hideModal()}
          >
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          {/* <!-- Modal header --> */}
          <div className="rounded-t border-b px-6 py-4 dark:border-gray-600">
            <h3 className="text-base font-semibold text-gray-900 dark:text-white lg:text-xl">
              Bantuan
            </h3>
          </div>
          {/* <!-- Modal body --> */}
          <div className="p-6">
            <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
              Hubungi Koordinator Sektor Berikut untuk mendapatkan bantuan
            </p>
            <ul className="my-4 space-y-3">
              {SECTOR_COORDINATOR.map((c) => (
                <SectorCoordinator key={c.phone} {...c} />
              ))}
            </ul>
            <div className="flex flex-row">
              <svg
                aria-hidden="true"
                className="mr-2 h-6 w-6"
                focusable="false"
                data-prefix="far"
                data-icon="question-circle"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z"
                ></path>
              </svg>
              <p className="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400">
                Data maktab yang ditapilkan adalah data yang sudah melakukan
                pendaftaran melalui form dan contact person di masa pendaftaran
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MaktabHelp;

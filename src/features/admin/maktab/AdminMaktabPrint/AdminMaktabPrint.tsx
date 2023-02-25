import { Button } from "flowbite-react";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { useAdminMaktabPrintStore } from "./adminMaktabPrint.store";
import MaktabData from "./components/MaktabData";
import PrintComponent from "./components/PrintComponent";

function AdminMaktabPrint() {
  const data = useAdminMaktabPrintStore((s) => s.data);
  const setPrintData = useAdminMaktabPrintStore((s) => s.setPrintData);

  const hideModal = () => setPrintData(null);

  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div
      id="modal"
      aria-hidden="true"
      className={`fixed top-0 left-0 right-0 z-50 flex h-full max-h-screen w-full flex-1 items-center justify-center overflow-y-auto overflow-x-hidden bg-gray-400/50 p-4 md:inset-0 ${
        !data ? "hidden" : ""
      }`}
      onClick={(e) => {
        e.stopPropagation();
        hideModal();
      }}
    >
      <div className="relative w-full max-w-4xl">
        <div className="relative w-full rounded-lg bg-white shadow dark:bg-gray-700 md:mt-20">
          <Button
            className="absolute top-3 right-14"
            onClick={() => handlePrint()}
          >
            Cetak
          </Button>
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
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          {/* <!-- Modal header --> */}
          <div className="rounded-t border-b px-6 py-4 dark:border-gray-600">
            <h3 className="text-base font-semibold text-gray-900 dark:text-white lg:text-xl">
              Cetak Data Maktab
            </h3>
          </div>
          {/* <!-- Modal body --> */}
          <div
            className="flex max-h-[80vh] flex-col items-stretch overflow-scroll p-6"
            ref={componentRef}
          >
            <PrintComponent data={data ?? []} />
          </div>
        </div>
      </div>
      <div style={{ display: "none" }}>
        <PrintComponent data={data ?? []} ref={componentRef} />
      </div>
    </div>
  );
}

export default AdminMaktabPrint;

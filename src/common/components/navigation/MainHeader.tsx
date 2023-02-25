import { Button, Navbar } from "flowbite-react";
import Image from "next/image";
import { useMaktabHelpStore } from "~/features/maktab/MaktabHelp/maktabHelp.store";
import { useMaktabMapsStore } from "~/features/maktab/MaktabMaps/maktabMaps.store";
import Logo from "../../../assets/images/logo.webp";

function MainHeader() {
  const openMaps = useMaktabMapsStore((state) => state.showModal);
  const showHelp = useMaktabHelpStore((state) => state.showModal);

  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand href="/">
        <Image
          src={Logo}
          className="mr-3 h-6 w-6 sm:h-9 sm:w-9"
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Maktab HAF 2023
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button onClick={openMaps}>Peta</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/">Home</Navbar.Link>
        <Navbar.Link onClick={showHelp}>Hubungi Koordinator</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MainHeader;

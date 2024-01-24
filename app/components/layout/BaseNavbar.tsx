import { useMemo } from "react";

// Next
import Link from "next/link";
import Image from "next/image";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";

// Assets
import Logo from "@/public/assets/img/SeaskyLogo.svg";

// ShadCn
import { Card } from "@/components/ui/card";

// Components
import { DevDebug, ThemeSwitcher } from "@/app/components";

const BaseNavbar = () => {
  const devEnv = useMemo(() => {
    return process.env.NODE_ENV === "development";
  }, []);

  return (
    <header className="lg:container z-[99]">
      <Navbar className="">
        <NavbarContent>
          <NavbarBrand>
            <Link href="/">
              <Image
                priority
                src={Logo}
                alt="SSC Logo"
                width={50}
                height={50}
              />
              {/* <p className="font-bold text-inherit">SEASKY Cargo</p> */}
            </Link>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent>
          <NavbarItem><p className="font-bold text-3xl text-[#4FB7EB]">INVOICE GENERATOR</p></NavbarItem>
        </NavbarContent>
        <NavbarContent className="hidden sm:flex gap-4" justify="end">
          <NavbarItem>
            {/* ? DEV Only */}
            {devEnv && <DevDebug />}
          </NavbarItem>
          <NavbarItem>
            <ThemeSwitcher />
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </header>
  );
};

export default BaseNavbar;

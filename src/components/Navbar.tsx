"use client";
import { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

const NavbarDemo = () => {
  return <div>NavbarDemo</div>;
};
// export default NavbarDemo;

function Navbar({ className }: { className?: String }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem setActive={setActive} active={active} item="home">
            Home
          </MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;

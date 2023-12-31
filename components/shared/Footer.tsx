import Link from "next/link";
import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-2 p-1 text-center sm:flex-row">
        <Link href="/">
          <Logo />
        </Link>
        <p className="">2023 Scheduler. All rights reseved.</p>
      </div>
    </footer>
  );
};

export default Footer;

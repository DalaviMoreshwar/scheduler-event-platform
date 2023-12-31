import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center gap-4">
      <Image src="/assets/images/logo.svg" alt="logo" width={40} height={100} />{" "}
      <h4 className="font-bold text-lg">Scheduler</h4>
    </div>
  );
};

export default Logo;

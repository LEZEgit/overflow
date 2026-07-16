import { LeftMenu } from "@/components/menu";
import Navbar from "@/components/navigation/navbar/navbar";
import React, { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <Navbar />
      <div className="absolute top-12">
        <LeftMenu />
        <div className="ml-49">

        {children}
        </div>
      </div>
    </main>
  );
};

export default RootLayout;

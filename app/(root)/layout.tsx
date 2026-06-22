import Navbar from "@/components/navigation/navbar/navbar";
import React, { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex flex-col">
      <Navbar />
      {children}
    </main>
  );
};

export default RootLayout;

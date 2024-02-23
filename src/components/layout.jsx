import React from "react";

export default function Layout({ children }) {
  return (
    <div className="w-full md:w-[600px] m-auto bg-[#f6dfce] py-5 px-4">
      {children}
    </div>
  );
}

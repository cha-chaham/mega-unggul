import React from "react";
import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();
  return (
    <div
      className="rounded-full flex flex-row bg-[#861818] w-fit px-5 py-2 text-white font-medium gap-3 cursor-pointer"
      onClick={() => navigate("/")}
    >
      <img src="/back-button.svg" alt="" className="w-6" />
      Kembali
    </div>
  );
}

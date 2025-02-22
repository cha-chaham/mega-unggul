import Layout from "@/components/layout";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="text-black flex flex-col justify-center items-center h-screen">
        404 Not Found
        <button
          onClick={() => navigate("/")}
          className="mt-4 btn bg-[#961d1e] text-white"
        >
          Kembali
        </button>
      </div>
    </Layout>
  );
}

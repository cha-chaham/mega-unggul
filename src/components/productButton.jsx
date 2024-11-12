import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import loadingAnimation from "@/assets/loadingAnimation.json";

export default function ProductButton(props) {
  const { title, img, urlShopee, urlTokopedia, id } = props;
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const imageLoader = new Image();
    imageLoader.src = img;
    imageLoader.onload = () => {
      setIsLoading(false); // Set isLoading menjadi false ketika gambar sudah selesai dimuat
    };
    imageLoader.onerror = () => {
      console.error("Error loading image");
      setIsLoading(false); // Jika terjadi kesalahan saat memuat gambar, tetap atur isLoading menjadi false
    };
  }, [img]); // Gunakan img sebagai dependency agar useEffect dipanggil kembali ketika img berubah

  return (
    <div
      className="w-full pb-4 bg-[#961d1e] rounded-xl  ease-in transition-all hover:scale-105 active:scale-110"
      onClick={() => navigate(`/details/${id}`)}
    >
      <div className="w-full">
        {isLoading ? (
          <Lottie animationData={loadingAnimation} loop={true} />
        ) : (
          <img
            src={img}
            alt={title}
            className="w-full rounded-t-xl cursor-pointer"
            onClick={() => navigate(`/details/${id}`)}
          />
        )}
      </div>
      <div
        className="font-medium text-white mt-2 text-sm text-center px-2 cursor-pointer"
        onClick={() => navigate(`/details/${id}`)}
      >
        {title}
      </div>
      <div className="flex justify-center items-center mt-2 gap-3">
        <a href={urlShopee} target="_blank">
          <img src="/logo-shopee.png" alt="" className="w-8" />
        </a>
        {/* <a href={urlTokopedia} target="_blank">
          <img src="/logo-tokped.png" alt="" className="w-8" />
        </a> */}
        <a
          href={`https://api.whatsapp.com/send?phone=6285162880031&text=Halo,%20saya%20mau%20beli%20${encodeURIComponent(
            title
          )}`}
          target="_blank"
        >
          <img src="/logo-wa.png" alt="" className="w-8" />
        </a>
      </div>
    </div>
  );
}

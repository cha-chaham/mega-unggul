import React from "react";

export default function ProductButton(props) {
  const { title, img, urlShopee, urlTokopedia } = props;
  return (
    <div className="w-full pb-4 bg-[#961d1e] rounded-xl">
      <img src={img} alt={title} className="w-full rounded-t-xl" />
      <div className="font-medium text-white mt-2 text-sm text-center px-2">
        {title}
      </div>
      <div className="flex justify-center items-center mt-2 gap-2">
        <a href={urlShopee} target="_blank">
          <img src="/logo-shopee.png" alt="" className="w-8" />
        </a>
        <a href={urlTokopedia} target="_blank">
          <img src="/logo-tokped.png" alt="" className="w-8" />
        </a>
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

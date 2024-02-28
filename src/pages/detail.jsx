import BackButton from "@/components/backButton";
import Layout from "@/components/layout";
import { React, useEffect, useState } from "react";
import { getDetailProduct } from "@/utils/apis/products";
import { useParams } from "react-router-dom";
import Lottie from "lottie-react";
import loadingAnimation from "@/assets/loadingAnimation.json";

export default function Detail() {
  const [products, setProducts] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const params = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      setIsLoading(true);
      const result = await getDetailProduct(params.id);
      setProducts(result);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Layout>
      <BackButton />

      {loading ? (
        <Lottie animationData={loadingAnimation} loop={true} />
      ) : (
        <div className="px-3 mt-10">
          {/* Gambar */}
          <img
            src={products.img}
            alt=""
            className="rounded-xl h-1/2 mt-4 drop-shadow-lg"
          />

          {/* Foto dan Title */}
          <p className="mt-4 font-extrabold text-xl text-[#961d1e]">
            <div>
              <div
                className={`badge font-medium text-white mt-1 py-3 px-4 ${
                  products.kategori == "Habbie Tea Series"
                    ? "bg-[#2f7213]"
                    : products.kategori == "Habbie Flower Series"
                    ? "bg-[#bc4450]"
                    : "bg-blue-500"
                }`}
              >
                {products.kategori}
              </div>

              {" - " + products.namaProduk}
            </div>
          </p>

          {/* Toko Online */}
          <div className="grid grid-cols-2 justify-center items-center mt-8 gap-2">
            {products.urlShopee && products.urlShopee.length > 0 ? (
              <a href={products.urlShopee} target="_blank">
                <div className="flex flex-col justify-center items-center bg-[#961d1e] h-full py-8 rounded-xl">
                  <img src="/logo-shopee.png" alt="" className="w-12" />
                </div>
              </a>
            ) : (
              ""
            )}
            {products.urlTokopedia && products.urlTokopedia.length > 0 ? (
              <a href={products.urlTokopedia} target="_blank">
                <div className="flex flex-col justify-center items-center bg-[#961d1e] h-full py-8 rounded-xl">
                  <img src="/logo-tokped.png" alt="" className="w-12" />
                </div>
              </a>
            ) : (
              ""
            )}

            <a
              href={`https://api.whatsapp.com/send?phone=6285162880031&text=Halo,%20saya%20mau%20beli%20${encodeURIComponent(
                products.namaProduk
              )}`}
              target="_blank"
            >
              <div className="col-span-2 row-start-2 flex flex-col justify-center items-center py-8 bg-[#961d1e] h-full rounded-xl">
                <img src="/logo-wa.png" alt="" className="w-12" />
              </div>
            </a>
          </div>
        </div>
      )}
    </Layout>
  );
}

import BackButton from "@/components/backButton";
import Layout from "@/components/layout";
import ProductButton from "@/components/productButton";
import { React, useEffect, useState } from "react";
import { getProducts } from "@/utils/apis/products";
import Lottie from "lottie-react";
import loadingAnimation from "@/assets/loadingAnimation.json";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import basrengIcon from "/basreng.svg";
import mieIcon from "/mie.svg";
import ususIcon from "/usus.svg";
import makaroniIcon from "/makaroni.svg";
import moneyIcon from "/money.svg"

export default function KatalogSnack() {
    const [products, setProducts] = useState([]);
    const [loading, setIsLoading] = useState(false);
    const [basreng, setBasreng] = useState([])
    const [makaroni, setMakaroni] = useState([])
    const [mie, setMie] = useState([])
    const [usus, setUsus] = useState([])

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      setIsLoading(true);
      const result = await getProducts();
      setProducts(result)
      const filteredDataBasreng = result.filter(
        (item) => item.kategori === "Basreng"
      );
      const filteredDataMakaroni = result.filter(
        (item) => item.kategori === "Makaroni"
      );
      const filteredDataMieLidi = result.filter(
        (item) => item.kategori === "Mie Lidi"
      );
      const filteredDataUsus = result.filter(
        (item) => item.kategori === "Usus Goreng"
      );
      setBasreng(filteredDataBasreng)
      setMakaroni(filteredDataMakaroni)
      setMie(filteredDataMieLidi)
      setUsus(filteredDataUsus)
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Layout>
      <BackButton />
      <div
        id="header"
        className="flex justify-center flex-col items-center mb-5"
      >
        <div className="flex justify-center">
          <a href="/">
            <img src="logo-cmi.png" alt="" className=" w-48 p-3" />
          </a>
        </div>
        <div className="flex justify-center text-black text-center w-full md:w-3/4 text-sm mt-4">
        Selamat datang di dunia kelezatan dan keseruan dengan Snack Cemilan dari Mega Unggul! Camilan terpercaya ini adalah pilihan sempurna untuk menemani waktu santai dan ngemil seru kapan saja. Tersedia dalam berbagai varian seperti Basreng, Mie Lidi, Makaroni, dan Usus Goreng, camilan ini dikemas praktis dan siap menemani setiap momen spesial Anda.

        Coba sekarang dan rasakan sensasi kriuk yang bikin ketagihan! 🍟🔥
        </div>
      </div>

      <div className="text-center flex flex-row justify-center gap-8 text-white font-semibold rounded-full mb-3 bg-[#E53935] py-3 ">
        <img src={basrengIcon} alt="" className="w-6" />
        Basreng
        <img src={basrengIcon} alt="" className="w-6" />
      </div>

      <div
        className={`${
          loading ? "flex justify-center" : "grid grid-cols-2 md:grid-cols-3"
        } mb-8 gap-3 justify-items-center w-full px-5`}
      >
        {loading ? (
          <Lottie animationData={loadingAnimation} loop={true} />
        ) : (
          basreng.map((item) => (
            <ProductButton
              title={item.namaProduk}
              img={item.img}
              urlShopee={item.urlShopee}
              id={item.id}
            />
          ))
        )}
      </div>

      <div className="text-center flex flex-row justify-center gap-8 text-white font-semibold rounded-full mb-3 bg-[#FB8C00] py-3 ">
        <img src={makaroniIcon} alt="" className="w-6" />
        Makaroni Goreng
        <img src={makaroniIcon} alt="" className="w-6" />
      </div>

      <div
        className={`${
          loading ? "flex justify-center" : "grid grid-cols-2 md:grid-cols-3"
        } mb-8 gap-3 justify-items-center w-full px-5`}
      >
        {loading ? (
          <Lottie animationData={loadingAnimation} loop={true} />
        ) : (
          makaroni.map((item) => (
            <ProductButton
              title={item.namaProduk}
              img={item.img}
              urlShopee={item.urlShopee}
              id={item.id}
            />
          ))
        )}
      </div>

      <div className="text-center flex flex-row justify-center gap-8 text-white font-semibold rounded-full mb-3 bg-[#03B591] py-3 ">
        <img src={ususIcon} alt="" className="w-6" />
        Usus Goreng
        <img src={ususIcon} alt="" className="w-6" />
      </div>

      <div
        className={`${
          loading ? "flex justify-center" : "grid grid-cols-2 md:grid-cols-3"
        } mb-8 gap-3 justify-items-center w-full px-5`}
      >
        {loading ? (
          <Lottie animationData={loadingAnimation} loop={true} />
        ) : (
          usus.map((item) => (
            <ProductButton
              title={item.namaProduk}
              img={item.img}
              urlShopee={item.urlShopee}
              id={item.id}
            />
          ))
        )}
      </div>

      <div className="text-center flex flex-row justify-center gap-8 text-white font-semibold rounded-full mb-3 bg-[#2A4879] py-3 ">
        <img src={mieIcon} alt="" className="w-6" />
        Mie Lidi Goreng
        <img src={mieIcon} alt="" className="w-6" />
      </div>

      <div
        className={`${
          loading ? "flex justify-center" : "grid grid-cols-2 md:grid-cols-3"
        } mb-8 gap-3 justify-items-center w-full px-5`}
      >
        {loading ? (
          <Lottie animationData={loadingAnimation} loop={true} />
        ) : (
          mie.map((item) => (
            <ProductButton
              title={item.namaProduk}
              img={item.img}
              urlShopee={item.urlShopee}
              id={item.id}
            />
          ))
        )}
      </div>

      <div className="text-center flex flex-row justify-center gap-8 text-white font-semibold rounded-full mb-3 bg-[#554785] py-3 ">
        <img src={moneyIcon} alt="" className="w-6" />
        Paket Reseller
        <img src={moneyIcon} alt="" className="w-6" />
      </div>

      {/* <div
        className={`${
          loading ? "flex justify-center" : "grid grid-cols-2 md:grid-cols-3"
        } mb-8 gap-3 justify-items-center w-full px-5`}
      >
        {loading ? (
          <Lottie animationData={loadingAnimation} loop={true} />
        ) : (
          mie.map((item) => (
            <ProductButton
              title={item.namaProduk}
              img={item.img}
              urlShopee={item.urlShopee}
              id={item.id}
            />
          ))
        )}
      </div> */}
      <div className="text-black text-center py-12 font-bold text-lg">Coming Soon</div>
    </Layout>
  );
}

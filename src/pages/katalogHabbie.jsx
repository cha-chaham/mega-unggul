import BackButton from "@/components/backButton";
import Layout from "@/components/layout";
import ProductButton from "@/components/productButton";
import { React, useEffect, useState } from "react";
import { getProducts } from "@/utils/apis/products";
import Lottie from "lottie-react";
import loadingAnimation from "@/assets/loadingAnimation.json";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import teaLeaf from "/tea-leaf.svg"

export default function KatalogHabbie() {
  const [products, setProducts] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const [flower, setFlower] = useState([]);
  const [tea, setTea] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      setIsLoading(true);
      const result = await getProducts();
      setProducts(result)
      const filteredDataFlower = result.filter(
        (item) => item.kategori === "Habbie Flower Series"
      );
      const filteredDataTea = result.filter(
        (item) => item.kategori === "Habbie Tea Series"
      );
      setFlower(filteredDataFlower);
      setTea(filteredDataTea);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
  };

  function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  const shuffledProducts = shuffleArray(products);

  return (
    <Layout>
      <BackButton />
      <div
        id="header"
        className="flex justify-center flex-col items-center mb-5"
      >
        <div className="flex justify-center">
          <a href="/">
            <img src="logo-habbie-full.png" alt="" className=" w-48 p-3" />
          </a>
        </div>
        <div className="flex justify-center text-black text-center w-full md:w-3/4 text-sm mt-4">
          Selamat datang di dunia kelembutan dan kebahagiaan untuk bayi Anda
          dengan Minyak Telon Habbie Varian Tea & Flower Series! Produk
          terpercaya ini adalah pilihan sempurna untuk merawat dan melindungi si
          kecil dari berbagai ketidaknyamanan. Dikemas dalam botol 100 ml yang
          praktis, produk ini adalah tambahan yang esensial untuk setiap
          perawatan bayi Anda.
        </div>
      </div>

{/*       <Slider {...settings} className="h-full mb-8 w-full" rtl>
            {tea.map((item) => (
              <a href={`details/${item.id}`}>
                <img src={item.img} className="px-2"/>
              </a>
            ))}
      </Slider> */}

      <div className="text-center flex flex-row justify-center gap-8 text-white font-semibold rounded-full mb-3 bg-[#2f7213] py-3 ">
        <img src={teaLeaf} alt="" className="w-6" />
        Tea Series
        <img src="/tea-leaf.svg" alt="" className="w-6" />
      </div>

      <div
        className={`${
          loading ? "flex justify-center" : "grid grid-cols-2 md:grid-cols-3"
        } mb-8 gap-3 justify-items-center w-full px-5`}
      >
        {loading ? (
          <Lottie animationData={loadingAnimation} loop={true} />
        ) : (
          tea.map((item) => (
            <ProductButton
              title={item.namaProduk}
              img={item.img}
              urlShopee={item.urlShopee}
              id={item.id}
            />
          ))
        )}
      </div>

      <div className="text-center flex flex-row justify-center gap-8 text-white font-semibold rounded-full mb-3 bg-[#bc4450] py-3 ">
        <img src="/flower.svg" alt="" className="w-6" />
        Flower Series
        <img src="/flower.svg" alt="" className="w-6" />
      </div>

      <div
        className={`${
          loading ? "flex justify-center" : "grid grid-cols-2 md:grid-cols-3"
        } mb-8 gap-3 justify-items-center w-full px-5`}
      >
        {loading ? (
          <Lottie animationData={loadingAnimation} loop={true} />
        ) : (
          flower.map((item) => (
            <ProductButton
              title={item.namaProduk}
              img={item.img}
              urlShopee={item.urlShopee}
              id={item.id}
            />
          ))
        )}
      </div>
    </Layout>
  );
}

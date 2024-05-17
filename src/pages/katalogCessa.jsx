import BackButton from "@/components/backButton";
import Layout from "@/components/layout";
import ProductButton from "@/components/productButton";
import { getProducts } from "@/utils/apis/products";
import { React, useState, useEffect } from "react";
import Lottie from "lottie-react";
import loadingAnimation from "@/assets/loadingAnimation.json";

export default function KatalogCessa() {
  const [products, setProducts] = useState([]);
  const [loading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      setIsLoading(true);
      const result = await getProducts();
      const filteredData = result.filter(
        (item) => item.kategori === "Cessa Essential Oil Baby"
      );
      setProducts(filteredData);
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
        <div className="flex justify-center mt-12">
          <a href="/">
            <img src="logo-cessa.png" alt="" className="p-3 w-60" />
          </a>
        </div>
        <div className="flex justify-center text-black text-center w-full md:w-3/4 text-sm mt-4">
          Cessa Natural merupakan brand kesehatan yang ditujukan untuk
          penggunaan pada bayi dan anak untuk menggantikan pemakaian obat-obatan
          kimia saat bayi atau anak anda mengalami flu, batuk, demam dan
          berbagai keluhan lainnya.
          <br />
          <br />
          Obat-obatan kimia tidak dianjurkan digunakan pada anak apalagi bayi
          usia dini, oleh karena itu Cessa Natural hadir dengan bahan-bahan
          alami yang sangat bermanfaat untuk meredakan berbagai gejala seperti :
          Flu, Batuk, Demam bahkan salah satu produk Cessa memiliki khasiat
          sebagai anti tantrum atau sebagai penenang saat bayi sedang gelisah
          atau rewel.
        </div>
      </div>

      <div
        className={`${
          loading ? "flex justify-center" : "grid grid-cols-2 md:grid-cols-3"
        } mb-8 gap-3 justify-items-center w-full px-5`}
      >
        {loading ? (
          <Lottie animationData={loadingAnimation} loop={true} />
        ) : (
          products.map((item) => (
            <ProductButton
              title={item.namaProduk}
              img={item.img}
              urlShopee={item.urlShopee}
              id={item.id}
            />
          ))
        )}
        {/* <ProductButton
          title="Cessa Baby Happy Nose - Melegakan Pernapasan"
          img="/cessa/happy-nose.jpg"
        />
        <ProductButton
          title="Cessa Baby Bye Bye Owl - Deep Sleep/Tidur Nyenyak Sepanjang Malam"
          img="/cessa/bye-bye-owl.jpg"
        />
        <ProductButton
          title="Cessa Baby Lenire - Meredakan Perut Kembung/Mual"
          img="/cessa/lenire.jpg"
        />
        <ProductButton
          title="Cessa Baby Fedrop - Menyejukkan & Menenangkan"
          img="/cessa/fedrop.jpg"
        />
        <ProductButton
          title="Cessa Baby Bofit - Menyegarkan Tubuh"
          img="/cessa/bofit.jpg"
        />
        <ProductButton
          title="Cessa Baby Itch Away - Menghidari Nyamuk/Serangga"
          img="/cessa/itch-away.jpg"
        /> */}
      </div>
    </Layout>
  );
}

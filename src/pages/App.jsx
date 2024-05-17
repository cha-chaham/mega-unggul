import Layout from "@/components/layout";
import FlagButton from "@/components/flagButton";
import ProductButton from "@/components/productButton";
import Lottie from "lottie-react";
import { React, useState, useEffect } from "react";
import { getProducts } from "@/utils/apis/products";
import loadingAnimation from "@/assets/loadingAnimation.json";

function App() {
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
        (item) => item.kategori === "Permainan Bricks"
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
      <div className="w-full flex flex-col items-center">
        <div
          id="header"
          className="flex justify-center flex-col items-center mb-5"
        >
          <div className="flex justify-center">
            <a href="/">
              <img src="logo.png" alt="" className=" w-48 p-3" />
            </a>
          </div>
          <div className="flex justify-center text-black text-center font-semibold w-full text-sm mt-4">
            Terhubunglah bersama kami melalui channel informasi kami dibawah ini
          </div>
        </div>

        <div
          id="content"
          className="w-full md:w-3/4 flex justify-center flex-col gap-4"
        >
          <div className="grid grid-cols-2 gap-2">
            <FlagButton
              title="Katalog Habbie"
              url="/katalog-habbie"
              img="/logo-habbie.png"
              flexRow="false"
            />
            <FlagButton
              title="Katalog Cessa"
              url="/katalog-cessa"
              img="/logo-cessa.png"
              flexRow="false"
            />
            {loading ? (
              <div className="flex flex-row col-span-2 gap-4">
                <div class="bg-[#961d1e] shadow rounded-2xl max-w-sm w-full mx-auto">
                  <div class="animate-pulse flex flex-col">
                    <div class="bg-slate-700 w-full h-48 rounded-t-xl"></div>
                    <div class="flex-1 px-4 space-y-6 py-4">
                      <div class="h-2 bg-slate-700 rounded"></div>
                      <div class="space-y-3">
                        <div class="grid grid-cols-3 gap-4">
                          <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                          <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                        </div>
                        <div class="h-2 bg-slate-700 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bg-[#961d1e] shadow rounded-2xl max-w-sm w-full mx-auto">
                  <div class="animate-pulse flex flex-col">
                    <div class="bg-slate-700 w-full h-48 rounded-t-xl"></div>
                    <div class="flex-1 px-4 space-y-6 py-4">
                      <div class="h-2 bg-slate-700 rounded"></div>
                      <div class="space-y-3">
                        <div class="grid grid-cols-3 gap-4">
                          <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                          <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                        </div>
                        <div class="h-2 bg-slate-700 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
          </div>
          <FlagButton
            title="Belanja di Shopee"
            url="https://shopee.co.id/megaunggul.palu"
            img="/logo-shopee.png"
            subTitle="Gratis Ongkir Xtra & Cashback Xtra"
          />
          <FlagButton
            title="Hubungi Kami di Whatsapp"
            url="https://wa.me/6285162880031"
            img="/logo-wa.png"
            subTitle="Untuk Area Kota Palu dan Pembelian Jumlah Banyak"
          />
        </div>
      </div>
    </Layout>
  );
}

export default App;

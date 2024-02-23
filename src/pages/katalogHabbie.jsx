import BackButton from "@/components/backButton";
import Layout from "@/components/layout";
import ProductButton from "@/components/productButton";
import React from "react";

export default function KatalogHabbie() {
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

      <div className="text-center flex flex-row justify-center gap-8 text-white font-semibold rounded-full mb-3 bg-[#2f7213] py-3 ">
        <img src="/tea-leaf.svg" alt="" className="w-6" />
        Tea Series
        <img src="/tea-leaf.svg" alt="" className="w-6" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 mb-8 gap-3 justify-items-center w-full px-5">
        <ProductButton
          title="No.1 Jasmine Tea"
          img="/teh/1-jasmine-tea.jpg"
          urlShopee="https://shopee.co.id/Habbie-Aromatic-Minyak-Telon-1.-Jasmine-Tea-100ml-i.27246883.24614084573?sp_atk=abde0e6a-12ff-4082-8977-7d99146bc0ff&xptdk=abde0e6a-12ff-4082-8977-7d99146bc0ff"
          urlTokopedia="https://www.tokopedia.com/megaunggul/habbie-aromatic-minyak-telon-1-jasmine-tea-100ml?extParam=src%3Dshop%26whid%3D10593940"
        />
        <ProductButton
          title="No.2 Fresh Tea"
          img="/teh/2-fresh-tea.jpg"
          urlShopee="https://shopee.co.id/Habbie-Aromatic-Minyak-Telon-2.-Fresh-Tea-100ml-i.27246883.25464089293?sp_atk=dee527ba-98f5-4958-a3ad-cfc1f1f0dfdc&xptdk=dee527ba-98f5-4958-a3ad-cfc1f1f0dfdc"
          urlTokopedia="https://www.tokopedia.com/megaunggul/habbie-aromatic-minyak-telon-2-fresh-tea-100ml?extParam=src%3Dshop%26whid%3D10593940"
        />
        <ProductButton
          title="No.6 Green Tea Honey"
          img="/teh/6-green-tea-honey.jpg"
          urlShopee="https://shopee.co.id/Habbie-Aromatic-Minyak-Telon-6.-Green-Tea-Honey-100ml-i.27246883.24614084630?sp_atk=c5584e3b-c065-4428-af93-cb781accd7c1&xptdk=c5584e3b-c065-4428-af93-cb781accd7c1"
          urlTokopedia="https://www.tokopedia.com/megaunggul/habbie-aromatic-minyak-telon-6-green-tea-honey-100ml?extParam=src%3Dshop%26whid%3D10593940"
        />
        <ProductButton
          title="No.7 Black Tea"
          img="/teh/7-black-tea.jpg"
          urlShopee="https://shopee.co.id/Habbie-Aromatic-Minyak-Telon-7.-Black-Tea-100ml-i.27246883.24614084633?sp_atk=1afee8eb-da01-4036-ac7b-9abeb63d9b23&xptdk=1afee8eb-da01-4036-ac7b-9abeb63d9b23"
          urlTokopedia="https://www.tokopedia.com/megaunggul/habbie-aromatic-minyak-telon-7-black-tea-100ml?extParam=src%3Dshop%26whid%3D10593940"
        />
        <ProductButton
          title="No.10 Yellow Tea"
          img="/teh/10-yellow-tea.jpg"
          urlShopee="https://shopee.co.id/Habbie-Aromatic-Minyak-Telon-10.-Yellow-Tea-100ml-i.27246883.25464089296?sp_atk=58931e56-8dee-45bf-9dfd-370172cd0cf7&xptdk=58931e56-8dee-45bf-9dfd-370172cd0cf7"
          urlTokopedia="https://www.tokopedia.com/megaunggul/habbie-aromatic-minyak-telon-10-yellow-tea-100ml?extParam=whid%3D10593940%26src%3Dshop"
        />
        <ProductButton
          title="No.16 Masala Tea"
          img="/teh/16-masala-tea.jpg"
          urlShopee="https://shopee.co.id/Habbie-Aromatic-Minyak-Telon-16.-Masala-Tea-100ml-i.27246883.24614084631?sp_atk=c9791917-1f51-4ef3-b130-e8cdafe5bdef&xptdk=c9791917-1f51-4ef3-b130-e8cdafe5bdef"
          urlTokopedia="https://www.tokopedia.com/megaunggul/habbie-aromatic-minyak-telon-16-masala-tea-100ml?extParam=src%3Dshop%26whid%3D10593940"
        />
      </div>

      <div className="text-center flex flex-row justify-center gap-8 text-white font-semibold rounded-full mb-3 bg-[#bc4450] py-3 ">
        <img src="/flower.svg" alt="" className="w-6" />
        Flower Series
        <img src="/flower.svg" alt="" className="w-6" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 justify-items-center w-full px-5">
        <ProductButton
          title="No.1 Anggrek Bulan"
          img="/flower/1-anggrek-bulan.jpg"
          urlShopee="https://shopee.co.id/Habbie-Aromatic-Minyak-Telon-1.-Anggrek-Bulan-Flower-100ml-i.27246883.25464089292?sp_atk=4e11204b-63c9-4c40-9871-bf17ba4c195a&xptdk=4e11204b-63c9-4c40-9871-bf17ba4c195a"
          urlTokopedia="https://www.tokopedia.com/megaunggul/habbie-aromatic-minyak-telon-1-anggrek-bulan-flower-100ml?extParam=src%3Dshop%26whid%3D10593940"
        />
        <ProductButton
          title="No.2 Mangolia"
          img="/flower/2-magnolia.jpg"
          urlShopee="https://shopee.co.id/Habbie-Aromatic-Minyak-Telon-2.-Magnolia-Flower-100ml-i.27246883.24614084516?sp_atk=55ea6baf-7554-432a-896f-1fb6698034d0&xptdk=55ea6baf-7554-432a-896f-1fb6698034d0"
          urlTokopedia="https://www.tokopedia.com/megaunggul/habbie-aromatic-minyak-telon-2-magnolia-flower-100ml?extParam=src%3Dshop%26whid%3D10593940"
        />
        <ProductButton
          title="No.3 Peony"
          img="/flower/3-peony.jpg"
          urlShopee="https://shopee.co.id/Habbie-Aromatic-Minyak-Telon-3.-Peony-Flower-100ml-i.27246883.24614084519?sp_atk=221a7a08-953e-4408-b3df-332d7f02ffb3&xptdk=221a7a08-953e-4408-b3df-332d7f02ffb3"
          urlTokopedia="https://www.tokopedia.com/megaunggul/habbie-aromatic-minyak-telon-3-peony-flower-100ml?extParam=src%3Dshop%26whid%3D10593940"
        />
        <ProductButton
          title="No.6 Lotus"
          img="/flower/6-lotus.jpg"
          urlShopee="https://shopee.co.id/Habbie-Aromatic-Minyak-Telon-6.-Lotus-Flower-100ml-i.27246883.24614084572?sp_atk=d4b5f48d-e0c6-42b0-a87e-1547374f5a4c&xptdk=d4b5f48d-e0c6-42b0-a87e-1547374f5a4c"
          urlTokopedia="https://www.tokopedia.com/megaunggul/habbie-aromatic-minyak-telon-6-lotus-flower-100ml?extParam=src%3Dshop%26whid%3D10593940"
        />
        <ProductButton
          title="No.7 Petunia"
          img="/flower/7-petunia.jpg"
          urlShopee="https://shopee.co.id/Habbie-Aromatic-Minyak-Telon-7.-Petunia-Flower-100ml-i.27246883.24614084518?sp_atk=6cf3a1b1-4a5f-46db-bca2-0785222569a7&xptdk=6cf3a1b1-4a5f-46db-bca2-0785222569a7"
          urlTokopedia="https://www.tokopedia.com/megaunggul/habbie-aromatic-minyak-telon-7-petunia-flower-100ml?extParam=src%3Dshop%26whid%3D10593940"
        />
        <ProductButton
          title="No.8 Sakura"
          img="/flower/8-sakura.jpg"
          urlShopee="https://shopee.co.id/Habbie-Aromatic-Minyak-Telon-8.-Sakura-Flower-100ml-i.27246883.24614084520?sp_atk=d9da03d9-4aef-46c9-bdb1-f27f0c92e0fa&xptdk=d9da03d9-4aef-46c9-bdb1-f27f0c92e0fa"
          urlTokopedia="https://www.tokopedia.com/megaunggul/habbie-aromatic-minyak-telon-8-sakura-flower-100ml?extParam=src%3Dshop%26whid%3D10593940"
        />
        <ProductButton
          title="No.9 Cactus"
          img="/flower/9-cactus.jpg"
          urlShopee="https://shopee.co.id/Habbie-Aromatic-Minyak-Telon-9.-Cactus-Flower-100ml-i.27246883.25464089295?sp_atk=60597283-3364-4e12-8744-2a512090632e&xptdk=60597283-3364-4e12-8744-2a512090632e"
          urlTokopedia="https://www.tokopedia.com/megaunggul/habbie-aromatic-minyak-telon-9-cactus-flower-100ml?extParam=src%3Dshop%26whid%3D10593940"
        />
        <ProductButton
          title="No.11 Fuchsia"
          img="/flower/11-fuchsia.jpg"
          urlShopee="https://shopee.co.id/Habbie-Aromatic-Minyak-Telon-11.-Fuchsia-Flower-100ml-i.27246883.24614084574?sp_atk=889d50e5-f276-4a9d-8a52-c6e7117c5b38&xptdk=889d50e5-f276-4a9d-8a52-c6e7117c5b38"
          urlTokopedia="https://www.tokopedia.com/megaunggul/habbie-aromatic-minyak-telon-11-fuchsia-flower-100ml?extParam=whid%3D10593940%26src%3Dshop"
        />
        <ProductButton
          title="No.13 Lily"
          img="/flower/13-lily.jpg"
          urlShopee="https://shopee.co.id/Habbie-Aromatic-Minyak-Telon-13.-Lily-Flower-100ml-i.27246883.24614084575?sp_atk=c1d48b7b-c785-4fe9-824d-22db06c11bb0&xptdk=c1d48b7b-c785-4fe9-824d-22db06c11bb0"
          urlTokopedia="https://www.tokopedia.com/megaunggul/habbie-aromatic-minyak-telon-13-lily-flower-100ml?extParam=src%3Dshop%26whid%3D10593940"
        />
      </div>
    </Layout>
  );
}

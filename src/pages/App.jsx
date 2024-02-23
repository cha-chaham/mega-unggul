import Layout from "@/components/layout";
import FlagButton from "@/components/flagButton";

function App() {
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
          <div className="flex flex-row gap-2">
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
          </div>
          <FlagButton
            title="Belanja di Tokopedia"
            url="https://www.tokopedia.com/megaunggul"
            img="/logo-tokped.png"
            subTitle="Gratis Ongkir"
          />
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

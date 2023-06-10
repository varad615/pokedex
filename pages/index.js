import Head from "next/head";
import { Share } from "@capacitor/share";
import { Inter } from "@next/font/google";
import Link from "next/link";
import { HiShare } from "react-icons/hi";
import Layout from "@/components/Layout";
import { Device } from "@capacitor/device";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ pokemon }) {
  const logDeviceInfo = async () => {
    const info = await Device.getInfo();

    console.log(info);
  };

  const logBatteryInfo = async () => {
    const info = await Device.getBatteryInfo();

    console.log(info);
  };

  const share = async () => {
    await Share.share({
      title: "Checkout this pokedex",
      url: "https://github.com/varad615/nextjs-android",
      dialogTitle: "Share with friends"
    });
  };
  return (
    <>
      <Head>
        <title>Pokedex</title>
        <meta name="description" content="Pokedex" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="bg-white w-full z-20 top-0 left-0 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center">
            <img src="icon.png" className="h-8 mr-3" alt="pokedex" />
            <span className="self-center text-2xl whitespace-nowrap text-black font-bold">
              Pokedex
            </span>
          </div>
          <div className="flex md:order-2">
            <button
              onClick={() => share()}
              type="button"
              className="text-white bg-[#ED1B24] hover:bg-[#ee1515] font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 "
            >
              <HiShare />
              <span className="sr-only">Icon description</span>
            </button>
          </div>
        </div>
      </nav>
      <Layout>
        {pokemon.map((item, index) => (
          <li key={index}>
            <Link href={`/pokemon/${index + 1}`}>
              <div className="border p-4 border-grey my-2 hover:shadow-md capitalize flex items-center text-1g bg-[#f00000] rounded-xl">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 mr-3"
                />
                <span className="mr-2 font-bold">{index + 1}.</span>
                {item.name}
              </div>
            </Link>
          </li>
        ))}
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
  const { results } = await res.json();
  const pokemon = results.map((pokeman, index) => {
    const paddedId = ("00" + (index + 1)).slice(-3);
    const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
    return { ...pokeman, image };
  });
  return {
    props: { pokemon }
  };
};

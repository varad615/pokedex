import Layout from "@/components/Layout";
import Link from "next/link";
import { Share } from "@capacitor/share";
import { HiShare } from "react-icons/hi";
const Pokemon = ({ pokemon }) => {
  const share = async () => {
    await Share.share({
      title: "Checkout this pokedex",
      url: `http://localhost:3000/pokemon/${pokemon.id}`,
      dialogTitle: "Share with friends"
    });
  };
  return (
    <div>
      <nav className="bg-white border-gray-200 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex justify-between">
            <div className="flex items-center">
              <img src="/icon.png" className="h-8 mr-3" alt="Flowbite Logo" />
              <span className="self-center text-2xl whitespace-nowrap text-black font-bold">
                Pokedex
              </span>
            </div>
            <div>share</div>
          </div>
        </div>
      </nav>
      <nav className="bg-white fixed w-full z-20 top-0 left-0 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center">
            <img src="/icon.png" className="h-8 mr-3" alt="pokedex" />
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
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-col px-5 py-2 justify-center items-center">
          <img
            class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            src={pokemon.image}
            alt={pokemon.name}
          />
          <div class="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              {pokemon.id}. {pokemon.name}
            </h1>
            <p class="mb-8 leading-relaxed">
              <p>
                <span className="font-bold mr-2">Weight:</span> {pokemon.weight}
              </p>
              <p>
                <span className="font-bold mr-2">Height:</span>
                {pokemon.height}
              </p>
            </p>
            <h2 className="font-bold mr-2 text-2xl mt-6 mb-2">Types</h2>
            {pokemon.types.map((type, index) => (
              <p key={index}>{type.type.name}</p>
            ))}

            <div class="flex">
              <button class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                <span class="ml-4 flex items-start flex-col leading-none">
                  <span class="text-xs text-gray-600 mb-1">Weight</span>
                  <span class="title-font font-medium">{pokemon.weight}</span>
                </span>
              </button>
              <button class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center ml-4 hover:bg-gray-200 focus:outline-none">
                <span class="ml-4 flex items-start flex-col leading-none">
                  <span class="text-xs text-gray-600 mb-1">Height</span>
                  <span class="title-font font-medium">{pokemon.height}</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export const getServerSideProps = async (context) => {
  const { id } = context.query;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemon = await res.json();
  const paddedId = ("00" + id).slice(-3);
  pokemon.image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
  return {
    props: { pokemon }
  };
};
export default Pokemon;

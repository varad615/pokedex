import Layout from "@/components/Layout";
import Link from "next/link";
import Head from "next/head";
import { Share } from "@capacitor/share";
import { HiShare } from "react-icons/hi";
import { AiFillHome } from "react-icons/ai";
import { FaWeightHanging, FaRulerVertical } from "react-icons/fa";
import { useState } from "react";
const Pokemon = ({ pokemon }) => {
  const [hp, Sethp] = useState(pokemon.stats[0].base_stat);
  const [attack, Setattack] = useState(pokemon.stats[1].base_stat);
  const [defense, Setdefense] = useState(pokemon.stats[2].base_stat);
  const [spd, Setspd] = useState(pokemon.stats[3].base_stat);
  const [exp, Setexp] = useState(pokemon.stats[4].base_stat);

  const share = async () => {
    await Share.share({
      title: "Checkout this pokedex",
      url: `http://localhost:3000/pokemon/${pokemon.id}`,
      dialogTitle: "Share with friends"
    });
  };
  return (
    <div>
      <Head>
        <title className="capitalize">{pokemon.name} | Pokedex</title>
        <meta name="description" content="Pokedex" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href={pokemon.sprites.other.dream_world.front_default}
        />
      </Head>
      {/* <nav className="bg-white border-gray-200 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex justify-between">
            <div className="flex items-center">
              <img src="/icon.png" className="h-8 mr-3" alt="Flowbite Logo" />
              <span className="self-center text-2xl whitespace-nowrap text-[#F7B916] font-bold">
                Pokedex
              </span>
            </div>
            <div>share</div>
          </div>
        </div>
      </nav>
      <nav className="bg-[#121212] fixed w-full z-20 top-0 left-0 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center">
            <img src="/icon.png" className="h-8 mr-3" alt="pokedex" />
            <span className="self-center text-2xl whitespace-nowrap text-[#F7B916] font-bold">
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
      </nav> */}
      <div className="navbar bg-white">
        <div className="flex-1">
          <Link href="/">
            <div className="flex items-center">
              {/* <img src="/icon.png" className="h-8 mr-3" alt="pokedex" /> */}
              <AiFillHome size={30} color="#ED1B24" className="mr-3" />
              <span className="self-center text-2xl whitespace-nowrap text-[#F7B916] font-bold">
                Pokedex
              </span>
            </div>
          </Link>
        </div>
        <div className="flex-none">
          <button className="btn btn-square btn-ghost" onClick={() => share()}>
            <HiShare color="#F7B916" size={30} />
          </button>
        </div>
      </div>

      <section className="text-black body-font">
        <div className="container mx-auto flex flex-col px-5 py-2 justify-center items-center">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            src={pokemon.sprites.other.dream_world.front_default}
            alt={pokemon.name}
          />
          <div>
            <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-black capitalize">
                {pokemon.id}. {pokemon.name}
              </h1>
              <div className="flex flex-wrap gap gap-2">
                {pokemon.types.map((type, index) => (
                  <>
                    {/* <div key={index} className="flex">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 pb-2 rounded">
                      {type.type.name}
                    </span>
                  </div> */}

                    <div className="pill">
                      <p className="text-xs font-bold leading-none text-black">
                        {type.type.name}
                      </p>
                    </div>
                  </>
                ))}
              </div>
              <p className="w-80 text-3xl font-bold mt-8 leading-none text-center text-black">
                About
              </p>

              <div className="stats bg-white mt-4">
                <div className="stat ">
                  <div className="stat-figure text-secondary">
                    <FaWeightHanging size={20} color="#DE1C25" />
                  </div>
                  <div className="stat-title text-black">Weight</div>
                  <div className="stat-value text-black"> {pokemon.weight}</div>
                </div>

                <div className="stat border-black	">
                  <div className="stat-figure text-secondary">
                    <FaRulerVertical size={20} color="#DE1C25" />
                  </div>
                  <div className="stat-title text-black">Height</div>
                  <div className="stat-value text-black">{pokemon.height}m</div>
                </div>
              </div>

              <h2 className="font-bold mr-2 text-2xl mt-6 mb-2">Base Stats</h2>

              <div className="flex flex-col gap-4">
                <div className="flex items-center space-x-2">
                  <div className="text-[#F87272] font-bold border-2 border-white border-r-black pr-3">
                    HP
                  </div>
                  <div className="text-[#F87272] font-bold">{hp}%</div>
                  <progress
                    className="progress w-56 progress-error "
                    value={hp}
                    max="100"
                  ></progress>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="text-[#FBBD23] font-bold border-2 border-white border-r-black pr-3">
                    ATK
                  </div>
                  <div className="text-[#FBBD23] font-bold">{attack}%</div>
                  <progress
                    className="progress w-56 progress-warning  "
                    value={attack}
                    max="100"
                  ></progress>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="text-[#3ABFF8] font-bold border-2 border-white border-r-black pr-3">
                    DEF
                  </div>
                  <div className="text-[#3ABFF8] font-bold">{defense}%</div>
                  <progress
                    className="progress w-56 progress-info"
                    value={defense}
                    max="100"
                  ></progress>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="text-accent font-bold border-2 border-white border-r-black pr-3">
                    SPD
                  </div>
                  <div className="text-accent font-bold">{spd}%</div>
                  <progress
                    className="progress w-56 progress-accent"
                    value={spd}
                    max="100"
                  ></progress>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="text-success  font-bold border-2 border-white border-r-black pr-3">
                    EXP
                  </div>
                  <div className="text-success  font-bold">{exp}%</div>
                  <progress
                    className="progress w-56 progress-success "
                    value={exp}
                    max="100"
                  ></progress>
                </div>
              </div>
              <button
                className="btn btn-wide bg-[#ED1B24] border-white text-white mt-6 hover:bg-red-100 hover:text-[#ED1B24] hover:border-[#ED1B24]"
                onClick={() => window.my_modal_5.showModal()}
              >
                Moves
              </button>
              <dialog
                id="my_modal_5"
                className="modal modal-bottom sm:modal-middle"
              >
                <form method="dialog" className="modal-box bg-white">
                  <div className="flex flex-wrap gap gap-2">
                    {pokemon.moves.map((type, index) => (
                      <>
                        {/* <div key={index} className="flex">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 pb-2 rounded">
                      {type.type.name}
                    </span>
                  </div> */}

                        <div className="pill2">
                          <p className="text-xs font-bold leading-none text-white">
                            {type.move.name}
                          </p>
                        </div>
                      </>
                    ))}
                  </div>
                  <div className="modal-action">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn bg-[#ED1B24] border-white text-white mt-6 hover:bg-red-100 hover:text-[#ED1B24] hover:border-[#ED1B24]">
                      Close
                    </button>
                  </div>
                </form>
              </dialog>
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

import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from "react-router-dom";



const CardDetailsShow = ({ selectPokemon, addCard }) => {

    const [select, setSelect] = useState();
    useEffect(() => {
        if (selectPokemon) {
            localStorage.setItem(save, JSON.stringify(selectPokemon))
            setSelect(selectPokemon);

        } else {
            const savePokemonCard = localStorage.getItem(save)
            if (savePokemonCard) {
                setSelect(JSON.parse(savePokemonCard))
            }
        }
    }, [selectPokemon])


    const navigate = useNavigate();
    const save = "DetailsCard"



    const fetchSelect = async (url) => {
        try {
            const res = await fetch(url);
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const data = await res.json();
            addCard(data);
            console.log("successfully data is fetch");
            
        } catch (err) {
            console.error('Could not fetch Pokémon:', err);
            Swal.fire('Error', 'Failed to fetch that Pokémon.', 'error');
        }
    };


    const addCards = () => {
        if (select?.id) {
            addCard(select);
            return;
        }
        if (select?.url) {
            fetchSelect(select.url);
        } else {
            console.warn('Nothing to add — select has neither id nor url.');
        }
    };


    if (!select) {
        return <>
            <div className="w-full h-screen flex flex-col justify-center items-center text-center px-4">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-red-900 mb-4">
                    No Pokémon Card Details Here.
                </h1>
                <p className="text-lg text-gray-700 mb-6">Please add a card to continue.</p>
                <button
                    onClick={() => navigate("/")}
                    className="px-6 py-2 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 hover:scale-105 transition-transform duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                    ⬅️ Back Home
                </button>
            </div>
        </>
    }
    console.log("select", select);


    return (
        <div className="p-8 bg-white rounded-xl shadow-lg mx-auto mt-10 max-w-5xl">
            <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">{select?.name}</h1>
            <hr className="border-gray-300 mb-8" />

            <div key={select?.name} className="flex flex-col md:flex-row gap-8">
                {/* Left side: Images */}
                <div className="flex flex-col md:w-1/2 gap-8">
                    <div className="flex gap-4 justify-around">
                        {/* 3 images in a column */}
                        <div className="flex flex-col gap-4 w-32 md:w-40">
                            <img
                                src={select?.sprites?.other?.dream_world?.front_default}
                                alt=""
                                className="w-full h-24 md:h-32 object-contain bg-gray-100 rounded shadow"
                            />
                            <img
                                src={select?.sprites?.other?.home?.front_default}
                                alt=""
                                className="w-full h-24 md:h-32 object-contain bg-gray-100 rounded shadow"
                            />
                            <img
                                src={select?.sprites?.other?.home?.front_shiny}
                                alt=""
                                className="w-full h-24 md:h-32 object-contain bg-gray-100 rounded shadow"
                            />
                        </div>

                        <div className="flex flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-xl shadow-inner">
                            <img
                                src={select?.sprites?.other?.showdown?.front_default}
                                alt="Pokemon"
                                className="w-full max-w-sm mb-10 p-6 border-4 border-gray-300 rounded-3xl shadow-[0_10px_25px_rgba(0,0,0,0.1)] object-contain transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                            />

                            <div className="flex flex-wrap justify-center gap-6">
                                <button
                                    onClick={() => navigate("/")}
                                    className="px-6 py-2 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 hover:scale-105 transition-transform duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                >
                                    ⬅️ Back
                                </button>

                                <button
                                    onClick={addCards}
                                    className="px-6 py-2 bg-green-600 text-white rounded-full shadow-md hover:bg-green-700 hover:scale-105 transition-transform duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-green-300"
                                >
                                    ➕ Add
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
                {/* Vertical thick line */}
                <div className="hidden md:flex items-stretch">
                    <div className="w-[2px] bg-gray-400 mx-4" />
                </div>

                {/* Right side: Details */}
                <div className="flex flex-col md:w-1/2 gap-6">
                    <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                        <div>
                            <p className="font-semibold text-gray-700">Pokemon Name: <b>{select?.name}</b></p>
                            <p className="font-semibold text-gray-700">Base Experience: <b>{select?.base_experience}</b></p>
                            <p className="font-semibold text-gray-700">Moves: <b>{select?.moves?.[0]?.move?.name}</b></p>
                            <p className="font-semibold text-gray-700">Moves1: <b>{select?.moves?.[1]?.move?.name}</b></p>
                            <p className="font-semibold text-gray-700">Moves2: <b>{select?.moves?.[1]?.version_group_details?.[1]?.version_group?.name}</b></p>
                            <p className="font-semibold text-gray-700">Moves3: <b>{select?.moves?.[2]?.move?.name}</b></p>
                            <p className="font-semibold text-gray-700">Moves4: <b>{select?.moves?.[3]?.move?.name}</b></p>
                            <p className="font-semibold text-gray-700">Pokemon Height: <b>{select?.height}</b></p>
                            <p className="font-semibold text-gray-700">Pokemon Weight: <b>{select?.weight}</b></p>
                        </div>
                        <div>
                            <p className="font-semibold text-gray-700">Ability: <b>{select?.abilities?.[0]?.ability?.name}</b></p>
                            <p className="font-semibold text-gray-700">Ability2: <b>{select?.abilities?.[1]?.ability?.name}</b></p>
                            <p className="font-semibold text-gray-700">Version: <b>{select?.game_indices?.[0]?.version?.name}</b></p>
                            <p className="font-semibold text-gray-700">Types: <b>{select?.types?.[0]?.type?.name}</b></p>
                            <p className="font-semibold text-gray-700">Types1: <b>{select?.types?.[1]?.type?.name}</b></p>
                            <p className="font-semibold text-gray-700">Stats1: <b>{select?.stats?.[0]?.stat?.name}</b></p>
                            <p className="font-semibold text-gray-700">Stats2: <b>{select?.stats?.[1]?.stat?.name}</b></p>
                            <p className="font-semibold text-gray-700">Stats3: <b>{select?.stats?.[2]?.stat?.name}</b></p>
                            <p className="font-semibold text-gray-700">Stats4: <b>{select?.stats?.[3]?.stat?.name}</b></p>
                        </div>
                    </div>
                    {/* New element: Description */}

                </div>
            </div>
        </div>
    )
}

export default CardDetailsShow
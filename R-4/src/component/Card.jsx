import { useEffect, useState } from 'react'
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';

const Card = ({ setSelectPokemon }) => {
    const save = "saveCard"
    // const [search, setSearch] = useState("");
    const [pokemon, setPokemon] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const [cardPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(() => {
        const savepage = localStorage.getItem(save)
        return savepage ? JSON.parse(savepage) : 1;
    });
    const [pageShow] = useState(10);
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem(save, JSON.stringify(currentPage))
    }, [currentPage])

    // const searchPokemon = pokemon.filter((curCard) =>
    //     curCard.name.toLowerCase().includes(search.toLowerCase())
    // );

    const fetchPokemonCard = async (API2) => {
        try {
            const res = await fetch(API2);
            const data = await res.json();
            setSelectPokemon(data)
        } catch (error) {
            console.log(error);
        }
    }

    const fetchPokemonData = async (page = 1) => {
        const offset = (page - 1) * cardPage;
        const API = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${cardPage}`;
        const res = await fetch(API);
        const data = await res.json();
        setPokemon(data.results);
        setTotalCount(data.count);
    };

    useEffect(() => {
        fetchPokemonData(currentPage);
    }, [currentPage]);

    // Pagination logic
    const totalPages = Math.ceil(totalCount / cardPage);
    const startPage = Math.floor((currentPage - 1) / pageShow) * pageShow + 1;
    const endPage = Math.min(startPage + pageShow - 1, totalPages);
    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }

    const handlePrev = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const Handletransfer = async (p) => {
        await fetchPokemonCard(p.url)
        navigate("/cardDetails")
    }

    return (
        <div className="p-6">
            {/* <input className='m-5 border-white text-white w-50 p-2 rounded-4xl border-4' type="text" placeholder='name' value={search} onChange={(e) => setSearch(e.target.value)} /> */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
                {pokemon.map((PD) => (
                    <li key={PD?.name}>
                        <div onClick={() => Handletransfer(PD)}>
                            <div className="hover:cursor-pointer group flex flex-col items-center border-2 border-gray-300 bg-gray-100 p-6 rounded-xl shadow hover:scale-105 hover:shadow-lg transition-all duration-300">
                                <img src={`https://img.pokemondb.net/artwork/large/${PD.name}.jpg`} alt={PD.name} className="w-24 h-24 mb-2 object-contain" />
                                <h1 className="text-lg font-semibold text-gray-800 capitalize">{PD.name}</h1>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>

            <div className="flex justify-center items-center gap-4 mt-8">
                <button
                    className="hover:cursor-pointer p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
                    onClick={handlePrev}
                    disabled={currentPage === 1}
                >
                    <GrFormPreviousLink size={24} />
                </button>
                <ul className="flex gap-2">
                    {pageNumbers.map((num) => (
                        <li key={num}>
                            <button
                                className={`px-4 py-2 rounded ${currentPage === num ? 'bg-blue-700' : 'bg-blue-500'} text-white font-semibold shadow hover:cursor-pointer hover:bg-blue-600 transition`}
                                onClick={() => setCurrentPage(num)}
                            >
                                {num}
                            </button>
                        </li>
                    ))}
                </ul>
                <button
                    className="hover:cursor-pointer p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                >
                    <GrFormNextLink size={24} />
                </button>
            </div>
        </div>
    );
};

export default Card

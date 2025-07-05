import React from 'react';

const Addcard = ({ list, onDelete }) => {
  const cards = Object.values(list);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <img
        src="https://wallpapercave.com/wp/c2s0SHH.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60 px-6 py-8 flex flex-col">
        <h2 className="text-white text-3xl font-bold mb-6 text-center">
          Your Pokémon Cards
        </h2>

        <div className="flex-1 overflow-y-auto pr-2">
          {cards.length === 0 ? (
            <p className="text-white text-center">No cards added yet.</p>
          ) : (
            <div
              className={`grid gap-6 ${cards.length === 1
                ? 'grid-cols-1 place-items-center'
                : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
                }`}
            >
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="max-w-sm w-full bg-white rounded-xl shadow-md overflow-hidden my-4"
                >
                  <div className="flex items-center justify-center bg-gray-100 h-48">
                    <img
                      src={card?.sprites?.other?.dream_world?.front_default}
                      alt={card?.name}
                      className="object-contain h-32 w-32"
                    />
                  </div>

                  <div className="p-5 space-y-2 text-gray-800">
                    <p className="font-bold text-xl text-blue-700">
                      {card?.name?.toUpperCase()}
                    </p>
                    <p><b>BaseExp:</b> {card?.base_experience}</p>
                    <p><b>Ability:</b> {card?.abilities?.[0]?.ability?.name}</p>
                    <p><b>Version:</b> {card?.game_indices?.[0]?.version?.name}</p>
                    <p><b>Move:</b> {card?.moves?.[0]?.move?.name}</p>
                    <p><b>Type:</b> {card?.types?.[0]?.type?.name}</p>
                    <p><b>Height:</b> {card?.height}</p>
                    <p><b>Weight:</b> {card?.weight}</p>
                    <button
                      onClick={() => onDelete(card?.id)}
                      className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Addcard;

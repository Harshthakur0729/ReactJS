import React from 'react'
import Card from './Card'

const Home = ({setSelectPokemon}) => {
  return (
    <div className="relative bg-gray-100">
      <img
        className="w-full h-60 sm:h-80 md:h-96 lg:h-120 object-cover"
        src="https://img.freepik.com/free-vector/realistic-samurai-illustrated-background_52683-69457.jpg?size=626&ext=jpg&ga=GA1.1.1614866781.1715597261&semt=ais_hybrid"
        alt="Samurai Illustration"
      />
      {/* Overlay content */}
      <div className="absolute inset-0 w-full h-full grid place-items-center overflow-auto">
        <div className="w-full max-w-4xl px-2 sm:px-4">
          <Card setSelectPokemon={setSelectPokemon}/>
        </div>
      </div>
    </div>
  )
}

export default Home
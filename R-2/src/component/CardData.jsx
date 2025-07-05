import { useContext } from 'react'
import Contner from './Contner'

const CardData = () => {
    const myData = useContext(Contner)
    return (
        <>
            <ul className="series-list">
                {myData.map((curEle) => (
                    <li key={curEle.id} className="series-card">
                        <img src={curEle.img_url} alt={curEle.name} />
                        <h2>{curEle.name}</h2>
                        <p><strong>Rating:</strong> {curEle.rating}</p>
                        <p><strong>Genre:</strong> {curEle.genre.join(', ')}</p>
                        <p><strong>Cast:</strong> {curEle.cast.join(', ')}</p>
                        <button >
                            Watch Now
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default CardData
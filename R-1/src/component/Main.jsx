import React from 'react'
import seriesData from '../api/api.json'

const Main = () => {
    return (
        <ul>
            {
                seriesData.map((curEle) => {
                    const { id, img_url, title, name, rating, genre, cast, watch_url } = curEle;
                    return (
                        <li key={id}>
                            <img src={img_url} alt={title} />
                            <h2>{name}</h2>
                            <p>Rating: {rating}</p>
                            <p>Genre: {genre.join(', ')}</p>
                            <p>Cast: {cast.join(', ')}</p>
                            <a href={watch_url} target="_blank" rel="noopener noreferrer">
                                <button>Watch Now</button>
                            </a>
                        </li>
                    );
                })
            }
        </ul>
    );
};


export default Main
import React from 'react'
import '../App.css'
import newsEle from '../api/api2.json'
const News = () => {
    return (
        <>
            <ul>
                {
                    newsEle.map((newsEle) => {
                        return (
                            <li key={newsEle.id}>
                                <div id='news_main'>
                                    <div id='div1'>
                                        <img src={newsEle.image_url} alt="News Image" />
                                    </div>

                                    <div id='div2'>
                                        <h1> Name :{newsEle.title}</h1>
                                        <p>Summary : {newsEle.summary}</p>
                                        <h1>Publish Date : {newsEle.published_at}</h1>
                                        <button><a href={newsEle.read_more_url}>Read More</a></button>
                                    </div>
                                </div>
                            </li>
                            )
                    })
                }
            </ul>



        </>
    )
}

export default News
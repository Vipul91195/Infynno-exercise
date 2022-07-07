import React from "react";
import { useEffect, useState } from 'react';
import vector from '../images/Vector.png';
import plus from "../images/+.png";

export default function Home() {

    const [data, setData] = useState([])

    useEffect(() => {
        const url = "https://api.themoviedb.org/3/movie/upcoming?api_key=c17bf45957fa71b9a032d91aa15923d7&language=en-US&page=1"

        // const url = "https://image.tmdb.org/t/p/w500/p1F51Lvj3sMopG948F5HsBbl43C.jpg"

        fetch(url)
            .then(res => res.json())
            .then(json => {
                console.log("json", json.results[19].id)
                fetch("https://api.themoviedb.org/3/movie/" + json.results[19].id + "?api_key=c17bf45957fa71b9a032d91aa15923d7&append_to_response=images")
                    .then(res => res.json())
                    .then(json => {
                        setData(json)
                        console.log(json)
                    })
            })
    }, [])

    if (data.length === 0) {
        return <p>loading..</p>
    }

    return (


        <>
            <div className="backdrops">
                <img src={`https://image.tmdb.org/t/p/w1280${data.images.backdrops[0].file_path}`} alt="" />
            </div>

            {/* {JSON.stringify(data.images.logos[0], null, 2)} */}
            <div className="temp">
                <div>
                    <img src={`https://image.tmdb.org/t/p/w500${data.images.logos[0].file_path}`} alt="" className="logos" />
                </div>

                <div>
                    <p className="overview">{data.overview} </p>
                </div>

                <div>
                    <p className="Genres">GENRES</p>
                    <p className="genres">{data.genres.map(item => { return (item.name) }).join(', ')} </p>
                </div>

                <div className="home-button">
                    <button className="watch"><span>WATCH </span><img src={vector} alt="" className="vector" /></button>
                    <button className="mylist"><span>MY LIST</span><img src={plus} alt="" className="plus" /></button>
                </div>
            </div>
        </>
    )
}
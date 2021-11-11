import React, { useEffect, useState } from 'react'
import './banner.css'
import requests from '../../../request'
import axios from '../../../axios'

import instance from '../../../axios'
export default function Banner() {

    const [movie , setMovie] = useState([])

    useEffect(()=> {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length -1)])
            console.log(movie)
            return request
        }

        fetchData()
    },[])

    
    const truncat =(string , n) => {
        return string?.length>n ? string.substr(0,n-1) + '...' : string
    }
    return (
        <header className="banner" style={{
            backgroundSize:'cover',
            backgroundImage:`url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
            backgroundPosition:'center center'
        }}>
            <div className="banner_contents">
                <h1 className="banner_title">{movie?.name || movie?.original_name}</h1>
                <div className="banner_buttons">
                    <button className='banner_button'>Play</button>
                    <button className='banner_button'>My list</button>
                </div>
                <div className="banner_description">
                    <h1>{truncat(movie?.overview, 120)} </h1>
                </div>
            </div>

            <div className="banner--fadeBottom"></div>
        </header>
    )
}

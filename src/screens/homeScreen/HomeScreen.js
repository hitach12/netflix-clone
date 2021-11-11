import React from 'react'
import requests from '../../request'
import Banner from '../components/banner/Banner'
import Nav from '../components/nav/Nav'
import Rows from '../components/rows/Rows'
import "./homeScreen.css"

export default function HomeScreen() {
    return (
        <div className="homeScreen">
            <Nav/>
            

            <Banner/>

            <Rows 
            title ="NETFLIX ORIGINALS"
            fetchUrl = {requests.fetchNetflixOriginals}
            isLargeRow ={true}/>
            <Rows 
            title ="Top Rated"
            fetchUrl = {requests.fetchTopRated}
            />
            <Rows 
            title ="Action Movies"
            fetchUrl = {requests.fetchActionMovies}
            />
            <Rows 
            title ="Comedy Movies"
            fetchUrl = {requests.fetchComedyMovies}
            />
            <Rows 
            title ="Horror Movies"
            fetchUrl = {requests.fetchHorrorMovies}
            />
            <Rows 
            title ="Romance Movies"
            fetchUrl = {requests.fetchRomanceMovies}
            />
            <Rows 
            title ="Documentries"
            fetchUrl = {requests.fetchDocumentaries}
            />
        </div>
    )
}

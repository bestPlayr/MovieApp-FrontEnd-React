import React, { useEffect, useState } from "react";
import "./MovieList.css";
import { useParams } from "react-router-dom";
import Card from "./Card";
export default function MovieList() {
    
    const [movieList, setMovieList] = useState([]);
    const { type } = useParams();

    useEffect(() => {
        getData();
    }, [type]); 

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type || "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res => res.json())
        .then(data => setMovieList(data.results))
        .catch(error => console.error("Error fetching data:", error));
    };

    return (
        <div className="movie_list">
            <h2 className="title_list">{(type || "POPULAR").toUpperCase()}</h2>
            <div className="card_list">
                {
                    movieList.map(movie => (
                        <Card key={movie.id} movie={movie} /> 
                    ))
                }
            </div>
        </div>
    );
}




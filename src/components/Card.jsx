import React from 'react';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Link } from 'react-router-dom';
import "./Card.css";

export default function Card({ movie }) {
    return (
        <div className='cards'>
            {movie ? (
                <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none", color: "white" }}>
                    <img className='cards_img' src={movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : 'https://via.placeholder.com/300x450'} alt={movie.original_title} />
                    <div className="cards_overlay">
                        <div className="cards_title">{movie.original_title}</div>
                        <div className="cards_runtime">
                            {movie.release_date}
                            <span className="cards_rating">{movie.vote_average}<i className="fas fa-star" /></span>
                        </div>
                        <div className="cards_description">{movie.overview.slice(0, 118) + "..."}</div>
                    </div>
                </Link>
            ) : (
                <SkeletonTheme color="#202020" highlightColor="#444">
                    <Skeleton height={300} duration={2} />
                </SkeletonTheme>
            )}
        </div>
    );
}
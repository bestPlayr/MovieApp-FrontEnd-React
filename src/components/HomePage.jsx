import React, { useEffect, useState } from 'react';
import './HomePage.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

export default function HomePage() {
    const [Movies, setMovies] = useState([]);

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
            .then((response) => response.json()) 
            .then((data) => setMovies(data.results));
    }, []);

    return (
        <>
            <div className='Slider'>
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {Movies.map((element, index) => (
                        <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${element.id}`}  key={index}>    
                            <div className='Images'>
                                {element.backdrop_path && 
                                    <img src={`https://image.tmdb.org/t/p/original${element.backdrop_path}`} alt={element.original_title} />
                                }
                            </div>
                            <div className='overlay'>
                                <div className="title">{element.original_title}</div>
                                <div className="runtime">
                                  {/*  {element.release_date}
                                    <span className="rating">
                                        {element.vote_average}
                                        <i className="fas fa-star" />{" "} 
                                      
                                    </span>
                            */}
                                    <div className="description">{element ? element.overview : ""}</div>

                                </div>
                            </div>
                        </Link>
                    ))}
                </Carousel>
            </div>
        </>
    );
}
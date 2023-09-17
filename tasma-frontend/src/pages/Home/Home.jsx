import { useEffect, useState } from "react"
import "./home.scss"
import axios from "axios"
import { Link } from "react-router-dom";

function Home() {
    const [films, setFilms] = useState([]);
    const [randomFilm, setRandomFilm] = useState({});

    useEffect(()=>{
        loadFilms();
        loadRandomFilm();
    },[]);

    const loadFilms= async ()=>{
        const result = await axios.get("http://localhost:8080/films");
        setFilms(result.data)
    }

    const loadRandomFilm = async ()=>{
        const result = await axios.get("http://localhost:8080/random-film");
        setRandomFilm(result.data);
        console.log(result.data)
    }

  return (
    <div className='home'>
        <div className="home__promo">
            <img src={randomFilm.posterUrl} alt="" className="home__promo-poster" />
            <div className="home__promo-content">
                <div className="home__promo-desc">
                    <div className="inner">
                        <h3>{randomFilm.title}</h3>
                        <p>{randomFilm.description}</p>
                        <Link to={`/view_film/${randomFilm.id}`}><button className="btn-2">
                        Watch
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="home__container">
            <div className="home__inner">
                <h2 className="home__title">Films List</h2>
                <div className="home__films">

                    {
                        films.map((film, index)=>(
                            <Link to={`/view_film/${film.id}`} className="home__film-btn">
                                <div className="home__film" key={index+film.title}>
                                    <div className="home__film-poster-wrapper">
                                        <img src={film.posterUrl} alt="poster" className="home__film-poster" />
                                    </div>
                                    <div className="home__film-info">
                                        <h4 className="home__film-title">{film.title}</h4>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home
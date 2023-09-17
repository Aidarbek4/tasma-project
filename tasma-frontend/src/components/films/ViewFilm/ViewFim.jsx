import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import "./viewfilm.scss"
import { Home } from '@mui/icons-material';

function ViewFim() {
    const [film, setFilm]=useState({
        title:"",
        description:"",
        year:"",
        duration:"",
        ageLimit:"",
        genre:"",
        posterUrl:"",
        videoUrl:""
    })

    useEffect(()=>{
        loadFilm()
    },[])

    const {id} = useParams();

    const loadFilm = async ()=>{
        const result = await axios.get(`http://localhost:8080/film/${id}`);
        setFilm(result.data);
    }

  return (
    <div className='viewfilm'>
            <div className="row">
                <div className="column">
                    <div className="card">

                        <div className="desc">
                            <div className="container">
                                <div className="inner">
                                    <div className="poster-wrapper">
                                        <img className='poster' src={film.posterUrl} alt="poster" />
                                    </div>
                                        <div className="info">
                                            <h2>{film.title}</h2>
                                            <p>{film.description}</p>
                                            <div className="details">
                                                <p>Genre: <span>{film.genre}</span></p>
                                                <p>Year: <span>{film.year}</span></p>
                                                <p>Duration: <span>{film.duration}</span></p>
                                                <p><span className='limit'>+{film.ageLimit}</span></p>
                                            </div>
                                        </div> 
                                    </div>                          
                            </div>
                        </div>
                        <div className="container">
                        <div className="video" >
                            <iframe width="1200" height="600" src={film.videoUrl} frameborder="0"></iframe>
                        </div>
                    <Link className='home' to={"/"}>
                        <Home/>
                    </Link>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default ViewFim
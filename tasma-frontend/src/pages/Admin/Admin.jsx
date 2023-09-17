import axios from "axios";
import "./admin.scss";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Admin() {
    const [films, setFilms]=useState([])

    useEffect(()=>{
        loadFilms()
    },[])

    const {id} = useParams();

    const loadFilms= async ()=>{
        const result = await axios.get("http://localhost:8080/films");
        setFilms(result.data)
    }

    const deleteFilm = async (id)=>{
        await axios.delete(`http://localhost:8080/film/${id}`);
        loadFilms();
    }

  return (
    <div classNameName='admin'>
        <div className="container">
        <Link className="button" to="/add_film">Add movie</Link>
        <div class="table">
		<div class="table-header">
			<div class="header__item"><a id="name" class="filter__link" href="#">Title</a></div>
			<div class="header__item"><a id="wins" class="filter__link filter__link--number" href="#">Year</a></div>
			<div class="header__item"><a id="draws" class="filter__link filter__link--number" href="#">Genre</a></div>
			<div class="header__item"><a id="losses" class="filter__link filter__link--number" href="#">Duration</a></div>
			<div class="header__item"><a id="total" class="filter__link filter__link--number" href="#">Actions</a></div>
		</div>
		<div class="table-content">	

        {
            films.map((film)=>(
               <div class="table-row">		
                    <div class="table-data">{film.title}</div>
                    <div class="table-data">{film.year}</div>
                    <div class="table-data">{film.genre}</div>
                    <div class="table-data">{film.duration}</div>
                    <div class="table-data">
                        <Link className="admin__btn" to={`/view_film/${film.id}`}>View</Link>
                        <Link className="admin__btn" to={ `/edit_film/${film.id}`}>Edit</Link>
                        <button className="admin__btn" onClick={()=>deleteFilm(film.id)}>Delete</button>
                    </div>
                </div> 
            ))
        }
			
		</div>	
	</div>
        </div>
    </div>
  )
}

export default Admin
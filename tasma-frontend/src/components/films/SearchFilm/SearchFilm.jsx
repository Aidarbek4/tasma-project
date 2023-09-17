import React, { useState } from 'react';
import axios from 'axios';
import "./search.scss";
import { Link } from 'react-router-dom';

const SearchFilm = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [films, setFilms] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/films?title=${searchQuery}`);
      const filmsData = response.data;
      setFilms(filmsData);
    } catch (error) {
      console.error('Error retrieving films:', error);
    }
  };

  const filterFilms = () => {
    const filtered = [];
    for (let i = 0; i < films.length; i++) {
      const film = films[i];
      if (film.title.toLowerCase().includes(searchQuery.toLowerCase())) {
        filtered.push(film);
      }
    }
    return filtered;
  };

  const filteredFilms = filterFilms();

  return (
    <div className='search'>
      <div className="container">
      <div className="search-field">
        <input className='input'
          type="text"
          placeholder='Enter the title of film'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className='search-result'>
        {filteredFilms.length === 0 ? (
          <div className="not-found">
            <div className="img-wrapper">
            <img src="https://drive.google.com/file/d/1m3EELxYq95AYaJXEk3bRVjAOXk3p1OHv/view?usp=drive_link" alt="" />
            </div>
            <p>No films found</p>
          </div>
        ) : (
          <ul>
            {filteredFilms.map((film) => (
              <Link to={`/view_film/${film.id}`}>
              <li key={film.id}>
                <div className="poster">
                  <img src={film.posterUrl} alt={film.title} />
                </div>
                <div className="desc">
                  <h2>{film.title}</h2>
                  <div className="info">
                    <span className="limit">+{film.ageLimit}</span>
                    <span>{film.year}</span>
                    <span>{film.duration}</span>
                    <span>{film.genre}</span>
                  </div>
                </div>
              </li>
              </Link>
            ))}
          </ul>
        )}
      </div>
      </div>
    </div>
  );
};

export default SearchFilm;

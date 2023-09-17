import { useState } from 'react'
import './addfilm.scss'
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function AddFilm() {

let navigate = useNavigate();

    const [film, setFilm]=useState({
        title:"",
        description:"",
        year:"",
        duration:"",
        ageLimit:"",
        genre:"",
        posterUrl:"",
        backgroundUrl:"",
        trailerUrl:"",
        videoUrl:""
    })

    const {title, description, year, duration, ageLimit, genre, videoUrl, trailerUrl, posterUrl, backgroundUrl}=film;

    const onInputChange=(e)=>{
        setFilm({...film,[e.target.name]:e.target.value})
    }

    const onSubmit=async (e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/film", film);
        navigate("/");
    }

  return (
    <div className='addfilm'>
        <div className="container">
            <div className="row">
                <div className="column col-1">
                <svg width="287" height="63" viewBox="0 0 287 63" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M78.866 56.2945C77.0834 59.3417 72.2709 59.3417 70.4883 56.2945L55.0159 29.8455C53.3397 26.9802 55.6291 23.5268 59.2047 23.5268C62.7804 23.5268 90.1496 23.5268 90.1496 23.5268C93.7253 23.5268 96.0146 26.9802 94.3384 29.8455L78.866 56.2945Z" fill="#0f0f0f"/>
<path d="M76.8302 1.3673C75.759 -0.455818 72.8669 -0.455812 71.7957 1.36731L62.4976 17.1919C61.4903 18.9062 62.8661 20.9724 65.0148 20.9724C67.1636 20.9724 83.6111 20.9724 83.6111 20.9724C85.7598 20.9724 87.1356 18.9062 86.1283 17.1919L76.8302 1.3673Z" fill="#0f0f0f"/>
<path d="M41.3191 54.6376C39.0417 54.6331 37.6869 52.3151 38.9605 50.6025L50.0155 35.7368C51.2131 34.1264 53.8698 34.2611 54.8765 35.9833C55.8831 37.7055 63.5884 50.8877 63.5884 50.8877C64.595 52.6099 63.2274 54.6805 61.086 54.6763L41.3191 54.6376Z" fill="#0f0f0f"/>
<path d="M107.7 54.6376C109.977 54.6331 111.332 52.3151 110.059 50.6025L99.0036 35.7368C97.806 34.1264 95.1493 34.2611 94.1426 35.9833C93.1359 37.7055 85.4307 50.8877 85.4307 50.8877C84.424 52.6099 85.7917 54.6805 87.9331 54.6763L107.7 54.6376Z" fill="#0f0f0f"/>
<path d="M43.3077 11.4342H0V19.4782H16.3581V50.2534H26.9497V19.4782H43.3077V11.4342Z" fill="#0f0f0f"/>
<path d="M135.178 26.2768C129.412 24.668 125.705 23.9933 125.705 21.3984C125.705 19.0112 129.353 18.4403 134.59 18.4403C141.239 18.4403 146.594 19.9453 150.007 22.2288V13.51C146.3 11.5898 140.533 10.5 134.472 10.5C124.822 10.5 115.113 13.1987 115.113 21.2946C115.113 29.2349 122.586 31.4146 130.294 33.6462C135.943 35.255 141.063 36.6563 141.063 39.6144C141.063 42.365 138.709 43.2472 131.589 43.2472C126.176 43.2472 119.468 42.0536 114.878 39.303V47.9699C118.114 49.6306 124.469 51.1875 131.589 51.1875C143.004 51.1875 151.654 48.7483 151.654 39.7701C151.654 30.9475 143.357 28.5603 135.178 26.2768Z" fill="#0f0f0f"/>
<path d="M206.165 11.4342L193.102 45.0636L180.157 11.4342H161.974V50.2534H172.39V16.6758L185.452 50.2534H200.869L213.932 16.6758V50.2534H224.347V11.4342H206.165Z" fill="#0f0f0f"/>
<path d="M275.761 50.2534H287L267.406 11.4342H251.695L232.1 50.2534H243.222L246.987 42.5725H271.936L275.761 50.2534ZM259.462 16.6239L268.406 35.0993H250.518L259.462 16.6239Z" fill="#0f0f0f"/>
                </svg>                  
                    <h2 className="addfilm__title">Film adding form</h2>
                    <img src="https://o.remove.bg/downloads/dca2be77-e0ad-4df5-bf68-b0b7f453cd73/depositphotos_197275564-stock-photo-smartphone-application-online-buying-booking-removebg-preview.png" alt="" />
                </div>
                <div className="column col-2">
                    <h3>Please, fill out the form below to add a movie</h3>
                    <form onSubmit={(e)=>onSubmit(e)}>
                    <div className="form">

                        <div className="group">
                        <label htmlFor="Title" >
                            <h4>Title</h4>
                        <input type={"text" } placeholder="Enter the film's title" name="title" value={title} onChange={(e)=>onInputChange(e)}/>
                        </label>

                        <label htmlFor="Description" >
                            <h4>Description</h4>
                        <input type={"text" } placeholder="Enter the film's description" name="description" value={description} onChange={(e)=>onInputChange(e)}/>
                        </label>

                        <label htmlFor="Genre" >
                            <h4>Genre</h4>
                        <input type={"text" } placeholder="Enter the film's genre" name="genre" value={genre} onChange={(e)=>onInputChange(e)}/>
                        </label>

                        <label htmlFor="AgeLimit" >
                            <h4>Age limit</h4>
                        <input type={"text" } placeholder="Enter the film's age limit" name="ageLimit" value={ageLimit} onChange={(e)=>onInputChange(e)}/>
                        </label>

                        <label htmlFor="Duration" >
                            <h4>Duration</h4>
                        <input type={"text" } placeholder="Enter the film's duration" name="duration" value={duration} onChange={(e)=>onInputChange(e)}/>
                        </label>
                        </div>

                        <div className="group">
                        <label htmlFor="Year" >
                            <h4>Year</h4>
                        <input type={"text" } placeholder="Enter the film's year" name="year" value={year} onChange={(e)=>onInputChange(e)}/>
                        </label>

                        <label htmlFor="PosterUrl" >
                            <h4>Poster Url</h4>
                        <input type={"text" } placeholder="Enter the film's poster url" name="posterUrl" value={posterUrl} onChange={(e)=>onInputChange(e)}/>
                        </label>

                        <label htmlFor="BackgroundUrl" >
                            <h4>Background Url</h4>
                        <input type={"text" } placeholder="Enter the film's background url" name="backgroundUrl" value={backgroundUrl} onChange={(e)=>onInputChange(e)}/>
                        </label>

                        <label htmlFor="TrailerUrl" >
                            <h4>Trailer Url</h4>
                        <input type={"text" } placeholder="Enter the film's trailer url" name="trailerUrl" value={trailerUrl} onChange={(e)=>onInputChange(e)}/>
                        </label>

                        <label htmlFor="VideoUrl" >
                            <h4>Video Url</h4>
                        <input type={"text" } placeholder="Enter the film's video url" name="videoUrl" value={videoUrl} onChange={(e)=>onInputChange(e)}/>
                        </label>
                        </div>

                    </div>
                    <button className='btn submit-btn' type="submit">Submit</button>
                    <Link to="/" className='btn'>Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddFilm
import React, { useState, useRef } from 'react'
import MovieList from './MovieList';


export default function AddMovieForm(props) {
    const inputRef = useRef();
    const movieRatingInputRef = useRef();

    function handleSubmit() {
        const movieTitle = inputRef.current.value;
        const movieRating = movieRatingInputRef.current.value;

        if (!movieTitle) {
            alert("Vänligen ange filmtitel");
        } else if (movieRating == 0) {
            alert("Vänligen ange filmbetyg");
        } else {
           
            const newId = props.movies.length > 0 ? props.movies[props.movies.length -1].id + 1 : 1

            props.setMovie([...props.movies, {
                id: newId,
                title: movieTitle,
                rating: movieRating
            }]);

            inputRef.current.value = "";
            movieRatingInputRef.current.value = 0;
        }
    }

    return (
        <div>
            <label>Titel:</label>
            <input className="form-control" placeholder="Titel här" ref={inputRef} />
            <label>Betyg:</label>
            <select type="text" class="form-control" ref={movieRatingInputRef}>
                <option value="0">Välj betyg här...</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <button className="btn btn-success my-2" onClick={() => handleSubmit()}>
                Spara film
            </button>
        </div>
    )
}
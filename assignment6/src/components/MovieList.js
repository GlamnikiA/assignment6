import React, { useState, useRef } from 'react'
import Movie from './Movie';

export default function MovieList(props) {

    function deleteMovie(id) {
        props.setMovie(props.movies.filter((movie) => movie.id !== id));
    }

    return (
        <div>
            <ul className="list-group">
                { props.movies.map(m => <Movie key={m.id} id={m.id} title={m.title} rating={m.rating} deleteMovie={deleteMovie}/>) }
            </ul>
        </div>
    )
}
import React from 'react'
import starImg from "../images/star.png"
import deleteImg from "../images/delete.png"
import "../index.css";

let stars = [];

export default function Movie(props) {

    function addStars() {
        let images = [];
        for(let i = 0; i < props.rating; i++) {
            images.push(starImg)
        }

        stars = images.map((image, index) => <img src={image} />)
    }


    return (
        <li className="list-group-item" data-grade={props.rating} data-title={props.title}>
            {props.title}
            <img src={deleteImg} style={{ cursor: "pointer" }} onClick={() => { props.deleteMovie(props.id) }} />
            {addStars()}
            {stars}
        </li>
    )
}
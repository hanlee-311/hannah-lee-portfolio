import React, { Component, useEffect } from 'react';
import Coverimage from '../assets/images/portfolio-background-image.jpeg';
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

const Parallax = () => {
    useEffect(() => {
        let elements = document.querySelector(".parallax");

        M.Parallax.init(elements);
    }, []);

    return (
        <>
            <div id= "home" class="parallax-container">
            <h1 class="left-align name">Hannah Lee</h1>
                    <h1 class="subtitle">In a sea of developers,</h1>
                    <h1 class="subtitle">I'm a great catch!</h1>
                <div class="parallax">
                    <img src={Coverimage} alt="hero-image"></img>
                </div>
            </div>
        </>
    )
}

export default Parallax;
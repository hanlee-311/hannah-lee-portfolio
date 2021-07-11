import React from 'react';
import Coverimage from '../assets/images/portfolio-background-image.jpeg';

function Heroimage() {
    return (
        <div class="parallax-container">
            <img src={Coverimage} alt="hero-image"></img>
            <h1 class="left-align name">Hannah Lee</h1>
            <h1 class="subtitle">In a sea of developers,</h1>
            <h1 class="subtitle">I'm a great catch!</h1>
        </div>
    )
};

export default Heroimage;
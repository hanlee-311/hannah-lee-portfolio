import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import ProfileImage from '../assets/images/profile-pic.jpg';
import TentacleImage from '../assets/images/tentacle-icon-24.png';

function AboutMe() {
    return (
        <div id="about-me" class="container section line big-screen">
            <img class="col s3 responsive-img tenctical" src={TentacleImage} alt="tentacle-pic"></img>
            <div class="row">
                <div class="col s3">
                    <img class="responsive-img circle profile-pic" src={ProfileImage} alt="profile-pic"></img>
                    <div>
                        <h3 class="center-align">Education <i class="fa fa-graduation-cap" aria-hidden="true"></i></h3>
                        <ul>
                            <ul class="school">
                                <li class="degree">BS in Biology</li>
                                <li>University of North Carolina Greensboro</li>
                            </ul>
                            <ul class="school">
                                <li class="degree">BA in International and Global Studies</li>
                                <li>University of North Carolina Greensboro</li>
                            </ul>
                            <ul class="school">
                                <li class="degree">BA Chemistry minor</li>
                                <li>University of North Carolina Greensboro</li>
                            </ul>
                        </ul>
                    </div>
                </div>
                <div class="about-me row">
                    <h2 class="col s9">-About Me-</h2>
                    <p>I am a Biology graduate looking to switch careers from reading genetic code to writing computer code. I
                        suppose the art of code has been coded into my DNA!</p>
                    <p>There are three things in life that I enjoy more than anything else: creating, organization, and
                        puzzle-solving. I like to get my mind working, my fingers moving, and to put things together. There is
                        nothing like the feeling that seeing your hard work take physical shape, or to finally solve that lingering
                        problem. No matter what the project is, there is always some form of pleasure to derive from problem-solving
                        and creating!</p>
                    <p>Over the course of my new-found career, I have started to build up examples of what I can do with code.
                        Think that I may be the person for your upcoming project? Take a look through my work and let my code speak
                        for itself!</p>
                </div>
            </div>
        </div>
    )
};

export default AboutMe;
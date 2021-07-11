import React from 'react';
import MusicNotes from '../assets/images/music-notes.png';
import EmployeeTracker from '../assets/images/employee-tracker.png';
import JYTHome from '../assets/images/JYTHome.png';
import CodingQuiz from '../assets/images/coding-quiz-page.png';
import FirstPortfolio from '../assets/images/portfolio-1.png';
import WeatherApp from '../assets/images/weather-app.png';

function Projects() {
    return (
        <div id="myWork" class="container section big-screen">
            <h2 class="center-align">-Projects-</h2>
            <div class="row">
                <div class="col s6">
                    <h4 class="center-align my-work-subtitles">Most Recent Work</h4>
                    <div class="past-work-container">
                        <a href="https://uncbootcampmusicnotes.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img class="col s8 offset-s2 past-work responsive-img circle" src={MusicNotes} alt="music-notes"></img></a>
                    </div>
                </div>
                <div class="col s6">
                    <h4 class="center-align my-work-subtitles">Previous Work</h4>
                    <div class="row">
                        <div class="past-work-container">
                            <a href="https://github.com/hanlee-311/employee-tracker" target="_blank" rel="noopener noreferrer"><img class="col s4 offset-s1 past-work responsive-img circle" src={EmployeeTracker} alt="employee-tracker"></img></a>
                        </div>
                        <div class="past-work-container">
                            <a href="https://hanlee-311.github.io/Just-Your-Type/" target="_blank" rel="noopener noreferrer"><img class="col s4 offset-s1 past-work responsive-img circle" src={JYTHome} alt="just-your-type"></img></a>
                        </div>
                    </div>
                    <div class="row">
                        <div class="past-work-container">
                            <a href="https://hanlee-311.github.io/code-quiz/" target="_blank" rel="noopener noreferrer"><img class="col s4 past-work responsive-img circle" src={CodingQuiz} alt="coding-quiz"></img></a>
                        </div>
                        <div class="past-work-container">
                            <a href="https://hanlee-311.github.io/hannah-lee-portfolio-2/" target="_blank" rel="noopener noreferrer"><img class="col s4 past-work responsive-img circle" src={FirstPortfolio} alt="first-portfolio"></img></a>
                        </div>
                        <div class="past-work-container">
                            <a href="https://hanlee-311.github.io/weather_app/" target="_blank" rel="noopener noreferrer"><img class="col s4 past-work responsive-img circle" src={WeatherApp} alt="weather-app"></img></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Projects;
import React from 'react';

function Navbar() {
    return (
        <div class="navbar-fixed">
            <nav>
                <div class="nav-wrapper">
                    <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                    <a href="#home" class="brand-logo main-logo center"><i class="fa fa-css3" aria-hidden="true"></i>Full-Stack
                        Developer Deep Dive</a>
                    <a href="#" class="brand-logo secondary-logo center"><i class="fa fa-css3" aria-hidden="true"></i></a>
                    <ul id="nav-mobile" class="left hide-on-med-and-down">
                        <li><a class="nav-hover" href="#home">Home</a></li>
                        <li><a class="nav-hover" href="#about-me">About</a></li>
                        <li><a class="nav-hover" href="#mySkills">Skills</a></li>
                        <li><a class="nav-hover" href="#myWork">Work</a></li>
                        <li><a class="nav-hover"
                            href="https://drive.google.com/file/d/1c47qMNM724PQA27liFTVaL18BvZVP7tL/view?usp=sharing">Resume</a></li>
                    </ul>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><a class="adjust tooltipped" href="https://github.com/hanlee-311" data-position="bottom"
                            data-tooltip="Github"><i class="fa fa-github-square fa-lg" aria-hidden="true"></i></a></li>
                        <li><a class="adjust tooltipped" href="https://www.linkedin.com/in/hannah-lee-9b4889144/"
                            data-position="bottom" data-tooltip="LinkedIn"><i class="fa fa-linkedin-square fa-lg"
                                aria-hidden="true"></i></a></li>
                        <li><a class="adjust tooltipped" href="" data-position="bottom" data-tooltip="919-586-4623"><i
                            class="fa fa-phone-square fa-lg" aria-hidden="true"></i></a></li>
                        <li><a class="adjust tooltipped" href="mailto:013hannah.a.lee@gmail.com" data-position="bottom"
                            data-tooltip="013hannah.a.lee@gmail.com"><i class="fa fa-envelope fa-lg" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
};

export default Navbar;
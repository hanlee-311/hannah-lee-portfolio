import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import GitHub from '@material-ui/icons/GitHub'
import LinkedIn from '@material-ui/icons/LinkedIn'
import LocalPhone from '@material-ui/icons/LocalPhone'
import Email from '@material-ui/icons/Email'

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
                            data-tooltip="Github"><GitHub/></a></li>
                        <li><a class="adjust tooltipped" href="https://www.linkedin.com/in/hannah-lee-9b4889144/"
                            data-position="bottom" data-tooltip="LinkedIn"><LinkedIn/></a></li>
                        <li><a class="adjust tooltipped" href="" data-position="bottom" data-tooltip="919-586-4623"><LocalPhone/></a></li>
                        <li><a class="adjust tooltipped" href="mailto:013hannah.a.lee@gmail.com" data-position="bottom"
                            data-tooltip="013hannah.a.lee@gmail.com"><Email/></a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
};

export default Navbar;
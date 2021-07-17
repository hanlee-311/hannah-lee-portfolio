import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import GitHub from '@material-ui/icons/GitHub';
import LinkedIn from '@material-ui/icons/LinkedIn';
import LocalPhone from '@material-ui/icons/LocalPhone';
import Email from '@material-ui/icons/Email';

class Sidebar extends Component {
    componentDidMount() {
        var elem = document.querySelector(".sidenav");
        var instance = M.Sidenav.init(elem, {
            edge: "left",
            inDuration: 250
        });
    }

    render() {
        return (
            <div>
                <ul id="slide-out" class="sidenav">
                    <li><a class="sidenav-close" href="#!"><i class="material-icons right">close</i></a></li>
                    <li><a class="nav-hover" href="#home">Home</a></li>
                    <li><a class="nav-hover" href="#about-me">About</a></li>
                    <li><a class="nav-hover" href="#myWork">Work</a></li>
                    <li><a class="nav-hover"
                        href="https://drive.google.com/file/d/1c47qMNM724PQA27liFTVaL18BvZVP7tL/view?usp=sharing">Resume</a></li>

                    <li><a href="https://github.com/hanlee-311"><GitHub /> GitHub</a></li>
                    <li><a href="https://www.linkedin.com/in/hannah-lee-9b4889144/"><LinkedIn /> LinkedIn</a></li>
                    <li><a href=""><LocalPhone /> (919) 586-4623</a></li>
                    <li><a href="mailto:013hannah.a.lee@gmail.com"><Email /> Email</a></li>
                </ul>
            </div>
        );
    }
}

export default Sidebar;
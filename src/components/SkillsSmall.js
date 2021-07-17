import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Javascript from '../assets/images/Javascript-shield.png';
import Node from '../assets/images/nodejs-logo-png--375.png';
import ReactJS from '../assets/images/react.png';
import MySQL from '../assets/images/mysql_PNG9.png';
import Mongo from '../assets/images/mongodb-3-1175138.png';
import GraphQL from '../assets/images/logo.png';

function SkillsSmall() {
    return (
        <div id="mySkills" class="light-blue accent-1 small-screen">
            <h2 class="center-align">-Skills-</h2>
            <div class="col s1 center-align">
                <img class="col s1 skill-image" src={Javascript} alt="javascript-symbol"></img>
            </div>
            <div class="col s2 center-align">
                <img class="col s1 skill-image" src={Node} alt="node-symbol"></img>
            </div>
            <div class="col s2 center-align">
                <img class="col s1 skill-image" src={ReactJS} alt="react-symbol"></img>
            </div>
            <div class="col s2 center-align">
                <img class="col s1 skill-image" src={MySQL} alt="mysql-symbol"></img>
            </div>
            <div class="col s2 center-align">
                <img class="col s1 skill-image" src={Mongo} alt="mongo-symbol"></img>
            </div>
            <div class="col s2 center-align">
                <img class="col s1 skill-image" src={GraphQL} alt="graohql-symbol"></img>
            </div>
        </div>
    )
};

export default SkillsSmall;
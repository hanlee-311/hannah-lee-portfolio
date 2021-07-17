import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import DirectionsBoat from '@material-ui/icons/DirectionsBoat'

function Footer() {
    return (
        <footer class="page-footer">
            <div class="colorBackground container">
                <div class="row">
                    <div class="col s12 center-align">
                        <h5 class="white-text"><DirectionsBoat/> Anchor Away! Thanks for your
                            interest!</h5>
                    </div>
                </div>
            </div>
            <div class="footer-copyright">
                <div class="container">
                    © 2021 Hannah Lee
                </div>
            </div>
        </footer>
    )
};

export default Footer;
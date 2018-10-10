import React from 'react';
import './RedSocial.css';

function Header(props) {
        return(
            <div className="col-md-2"> 
                <img src={props.imagen} className="RedSocialImg img-responsive"/>
            </div>
        )
}
export default Header; 
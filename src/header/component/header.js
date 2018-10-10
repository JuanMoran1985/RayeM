import React from 'react';
import './header.css';
import RedSocial from './RedSocial'

function Header(props) {
    return (
        <div className="container-fluid barra-corporativa ">
            <div className="col-xs-12 ">
                <div className="col-md-1 redes-sociales">
                        {
                            props.redes_sociales.redes_sociales.map((item) => {
                                return <RedSocial imagen={item.imagen} key={item.id} />
                            })
                        }
                </div>
                <div className="">
                    <p className="">{props.redes_sociales.Telefono}/{props.redes_sociales.mail} {props.redes_sociales.direccion}</p>
                </div>
            </div>
        </div>
    )
}

export default Header;



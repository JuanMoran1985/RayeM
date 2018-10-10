import React from 'react';
import './nav.css';
import Option from './option.js';

function Nav(props) {
    return (
        <div className="">
            <ul className="">
                {
                    props.data.opciones_nav.map((item) => {
                        return <Option text={item.texto_nav} key={item.id} />
                    })
                }
            </ul>
        </div>
    )
}

export default Nav;
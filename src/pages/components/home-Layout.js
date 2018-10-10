import React from 'react'
import Header from '../../header/component/header.js'

function HomeLayout(props) {
    return (
        <section>
            {props.children}
        </section>
    )
}

export default HomeLayout;
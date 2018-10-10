import React, { Component } from 'react';
import HomeLayout from '../components/home-Layout';
import Header from '../../header/component/header.js';
import Nav from '../../nav/component/nav.js'

class Home extends Component{
    render(){
        return(
            <HomeLayout> 
                <Header redes_sociales={this.props.data}/>
                <Nav data={this.props.data}/>
            </HomeLayout>
        )
    }
}

export default Home;
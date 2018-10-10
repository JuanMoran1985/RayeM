import React from 'react';
import {render} from 'react-dom';
import data from '../../datos.json';
import Home from '../pages/containers/home.js';

const app = document.getElementById('app');

render(<Home data={data} />, app); 
 
import React from 'react';
import Main from './Components/Main';
import ReactDOM from 'react-dom';
import './styles/stylesheet.css';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(<BrowserRouter><Main /></BrowserRouter>, document.getElementById('root'));
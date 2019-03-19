import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import AppWithAuth from './App';

ReactDOM.render(
    <BrowserRouter>
        <AppWithAuth />
    </BrowserRouter>
, document.getElementById('root'));
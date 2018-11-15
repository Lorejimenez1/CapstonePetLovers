import React from 'react';

import List from './list';
import AddForm from './form';

import './app.css';


export default class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            array: [],
            state: AZ,  
            loading: false,
            error: "Could not load board"
        };
    }


  }
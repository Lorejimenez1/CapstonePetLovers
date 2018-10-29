import React from 'react';

import './app.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            array: [],
            Zipcode: 0, 
            loading: false,
            error: null
        };
    }

     componentDidMount() {
        this.loadBoard();
    }

    loadBoard() {
         this.setState({
         error: null,
         loading: true
        });
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = `https://api.petfinder.com/pet.find?key=22d46e7c691779733cabbeb71d1b0058&location=Arizona&format=json&animal=dog&callback=?`;
        return fetch(proxyurl + url)
            .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
            }).then(data => this.setState({
                    array: data.pets.pet,
                    loading: false
                })
            )
            .catch(err =>
                this.setState({
                    error: 'Could not load board',
                    loading: false
                })
            );
    }
        
    

    setEditing(editing) {
        this.setState({
            editing
        });
    }

   render() {
        let body;
        if (this.state.error) {
            body = (
                <div className="message message-error">{this.state.error}</div>
            );
        } else if (this.state.loading) {
            body = (
                <div className="message message-default">Loading board...</div>
            );
        } else {
            const lists = this.state.array.map((list, index) => (
                <li className="list-wrapper" key={index}>
                        index={index}
                        {list} 
                </li>
            ));
            body = (
                <ul className="lists">
                    {lists}
                </ul>
            );
        }

        return (
            <div className="board">
                <h2>{this.props.title}</h2>
                {body}
            </div>
        );
    }
}

App.defaultProps = {
    title: 'PetFinder'
};
import React from 'react';

import './add-form.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
            Zipcode: 0, 
            editing: false
            error: null,
        }
    }

    onSubmit(event) {
        event.preventDefault();
        const text = this.textInput.value.trim();
        return 
        fetch(`https://api.petfinder.com/pet.find?key=22d46e7c691779733cabbeb71d1b0058&location=Arizona&format=json&animal=${text}&callback=?`).then(res => {
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
        if (!this.state.editing) {
            return (
                <div className="add-button"
                    onClick={() => this.setEditing(true)}>
                    <a href="#">Add a {this.props.type}...</a>
                </div>
            );
        }

        return (
            <form className="card add-form" onSubmit={(e) => this.onSubmit(e)}>
                <input type="text" ref={input => this.textInput = input} />
                <button>Zipcode</button>
                <button type="button" onClick={() => this.setEditing(false)}>
                    Cancel
                </button>
            </form>
            <div>
            <
        );
    }
}
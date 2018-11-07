import React from 'react';



import './form.css';

export default class AddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false
        }
    }

    onSubmit(event) {
        event.preventDefault();
        const text = this.textInput.value.trim();
        const pet = this.petInput.value.trim();
        if (text && this.props.onAdd) {
            this.props.onAdd(text, pet);
        }
        this.textInput.value = '';
    }

    setEditing(editing) {
        this.setState({
            editing
        });
    }

    render() {

        return (
            <form className="card add-form" onSubmit={(e) => this.onSubmit(e)}>
                <label>Zipcode </label>
                <input type="text" ref={input => this.textInput = input} />
                <label>Your ideal pet </label>
                <input type="text" placeholder="Examples: Dog, Cat, bird, Reptile " ref={input => this.petInput = input} />
                <button>submit</button>
            </form>
        );
    }
}
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
        if (text && pet && this.props.onAdd) {
            this.props.onAdd(text, pet);
        }
        this.textInput.value = '';
        this.petInput.value = '';
    }

    setEditing(editing) {
        this.setState({
            editing
        });
    }

    render() {

        return (
            <form className="add-form" onSubmit={(e) => this.onSubmit(e)}>
                <label>
                <input type="text" ref={input => this.textInput = input} />
                 <div className="label-text">Zipcode</div>
                </label>
                <label> 
                <input type="text" placeholder="I.E: dog, cat, or bird" ref={input => this.petInput = input} />
                <div className="label-text">Animal</div>
                </label>
                <button>submit</button>
            </form>
        );
    }
}
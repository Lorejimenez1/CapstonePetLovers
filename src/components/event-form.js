import React from 'react';



import './form.css';

export default class EventForm extends React.Component {
    constructor(props) {
        super(props);
    }
    onSubmit(event) {
        event.preventDefault();
        const text = this.textInput.value.trim();
        
        if (text &&  this.props.onAdd) {
            this.props.onAdd(text );
        }
        this.textInput.value = '';
        
    }

    render() {

        return (
            <form className="add-form" onSubmit={(e) => this.onSubmit(e)}>
                <label>
                <input type="text" ref={input => this.textInput = input} />
                 <div className="label-text">State</div>
                </label>
                <button>submit</button>
            </form>
        );
    }
}
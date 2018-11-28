import React from 'react';



import './form.css';

export default class EventForm extends React.Component {

    onSubmit(event) {
        event.preventDefault();
        const text = this.textInput.value.charAt(0).toLowerCase() + this.textInput.value.slice(1);
        
        if (text &&  this.props.onAdd) {
            this.props.onAdd(text );
        }
        this.textInput.value = '';
        
    }

    render() {

        return (
            <form className="add-form" onSubmit={(e) => this.onSubmit(e)}>
                <label>
                <input type="text" placeHolder="example: arizona" ref={input => this.textInput = input} />
                 <div className="label-text">State</div>
                </label>
                <button>submit</button>
            </form>
        );
    }
}
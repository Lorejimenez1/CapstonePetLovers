import React from 'react';
import './form.css';

export default class AddForm extends React.Component {

    onSubmit(event) {
        event.preventDefault();
        const text = this.textInput.value.trim();
        const pet = this.petInput.value.charAt(0).toLowerCase() + this.petInput.value.slice(1);
        const breed = this.breedInput.value.charAt(0).toUpperCase() + this.breedInput.value.slice(1); 
        if (text && pet && breed && this.props.onAdd) {
            this.props.onAdd(text, pet, breed);
        }
        else if (text && pet && this.props.onAdd) {
            const breed=""
            this.props.onAdd(text, pet, breed);
        }

        this.textInput.value = '';
        this.petInput.value = '';
        this.breedInput.value = ''
    }

    render() {

        return (
            <form className="add-form" onSubmit={(e) => this.onSubmit(e)}>
                <label>
                <input type="text" ref={input => this.textInput = input} required/>
                 <div className="label-text">Zipcode</div>
                </label>
                <label> 
                <input type="text" placeholder="I.E: dog, cat, or bird" ref={input => this.petInput = input} required/>
                <div className="label-text">Animal</div>
                </label>
                <label> 
                <input type="text" placeholder="Any" ref={input => this.breedInput = input} />
                <div className="label-text">Breed</div>
                </label>
                <button  formNoValidate="formNoValidate" type="submit">Submit</button>
                
            </form>
        );
    }
}

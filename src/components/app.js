imort React from 'react';

import List from './list';
import AddForm from './form';
import Spinner from 'react-spinkit';

import './app.css';

import {connect} from 'react-redux';
import { searchPets} from '../actions';

export  class App extends React.Component {
    renderResults() {
        if (this.props.loading) {
            return <Spinner name="cube-grid" color="purple" noFadeIn />;
        }

        else if (this.props.error) {
            return <h1>{this.props.error} check Zipcode or animal</h1>;
        }
        else if(this.props.pets === undefined) {
            return <h1>Check to make sure breed is spelled corecctly.We may not have that breed in our database. If you wish to search by all leave breed field empty</h1>;

        }
    
             const lists = this.props.pets.map((list, index) => (
                <div key={index}>
                    <List
                        index={index}
                        {...list}
                    />    
                </div>
            ));
        return(
            <div className="row">
                {lists}
            </div>    
        )};    
        
    

    search(location, animal, breed) {
        if(breed === undefined) { 
        const breed=""
    }
            this.props.dispatch(searchPets(location, animal, breed));
    } 
    
    render() {
       
        return (
             
            <div>
                <img className="logo" src="https://techflourish.com/images/blue-cat-paws-clipart-6.png" alt="animal logo"/>
                <h1>Find animals that are up for adoption now. Enter your zipcode and animal. Animal options include dog, cat and bird. <br /> Optionally you may search by breed. If you choose not to search by breed just leave the field as Any an hit submit.</h1>   
                <section className="form-column">
                    <AddForm
                    type="card"
                    onAdd={(text, pet, breed) => this.search(text, pet, breed)}
                />
                </section> 
                   
                {this.renderResults()}
                
            </div>
        
        );
    
    }
}

import React from 'react';

import List from './list';
import AddForm from './form';
import NavigationBar from './navbar';
import Events from './events';
import './app.css';

import {connect} from 'react-redux';
import { fetchPets} from '../actions';

export  class App extends React.Component {
    constructor(props) {
        super(props);
        

}
   
   search(location, animal, breed) {

        this.props.dispatch(fetchPets(location, animal, breed));
    } 


    

   render() {
        let body;
       
        const lists = this.props.pets.map((list, index) => (
                <div key={index}>
                    <List
                        index={index}
                        {...list}
                    />    
                </div>
            ));
            body = (
                <div className="row-container">
                    {lists}
                </div>
            );
        

        return (
        
            
            <div>
                <img className="logo" src="https://techflourish.com/images/blue-cat-paws-clipart-6.png"/>
                <h1>Find your new Pet</h1>   
                <section className="form-column">
                    <AddForm
                    type="card"
                    onAdd={(text, pet, breed) => this.search(text, pet, breed)}
                />
                </section>    
                {body}
            </div>
        
        );
    
}
}

const mapStateToProps = state => ({
    pets: state.pets,
});

export default connect(mapStateToProps)(App);


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
   
   search(location, animal) {

        this.props.dispatch(fetchPets(location, animal));
    } 


    /*
    loadAnimals = () => {
        console.log(this.state.pet)
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = 'https://api.petfinder.com/pet.find?key=22d46e7c691779733cabbeb71d1b0058&location='+this.state.Zipcode+'&format=json&animal='+this.state.pet+'&count=8'; 
        return fetch(proxyurl + url)
            .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
            }).then(data => 
                this.setState({
                    array: data.petfinder.pets.pet ,
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
    */
    setEditing(editing) {
        this.setState({
            editing
        });
    }

   render() {
        let body;
   
        const lists = this.props.pets.map((list, index) => (
                <div className="row" key={index}>
                    <List
                        index={index}
                        {...list} 
                    />    
                </div>
            ));
            body = (
                <div>
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
                    onAdd={(text, pet) => this.search(text, pet)}
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


import React from 'react';

import List from './list';
import AddForm from './form';

import './app.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            array: [],
            Zipcode: Number,
            pet: 'dog', 
            loading: false,
            error: "Could not load board"
        };
    }

    addZipcode(location, animal) {
        this.setState({
            pet: animal,
            Zipcode: location,
        })
        this.loadAnimals()    
    }  



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
    
    setEditing(editing) {
        this.setState({
            editing
        });
    }

   render() {
        let body;
   
        const lists = this.state.array.map((list, index) => (
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
                    onAdd={(text, pet) => this.addZipcode(text, pet)}
                />
                </section>    
                {body}
            </div>
        );
    
}
}


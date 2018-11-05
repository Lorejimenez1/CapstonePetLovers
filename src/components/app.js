import React from 'react';

import List from './list';
import AddForm from './form';

import './app.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            array: [],
            Zipcode: 0,
            pet: "", 
            loading: false,
            error: null
        };
    }

    addZipcode(location, animal) {
        this.setState({
            Zipcode: location,
            pet: animal
        })

         
        return fetch('https://api.petfinder.com/pet.find?key=22d46e7c691779733cabbeb71d1b0058&location='+this.state.Zipcode+'&format=json&animal='+this.state.pet+'&count=12')
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
    /*
     componentDidMount() {
        this.loadBoard();
    }

    loadBoard() {
         this.setState({
         error: null,
         loading: true
        });
        //const proxyurl = "https://cors-anywhere.herokuapp.com/";
        //const url = `https://api.petfinder.com/pet.find?key=22d46e7c691779733cabbeb71d1b0058&location=Arizona&format=json&animal=dog&callback=?`;
        let zip = this.state.Zipcode
        return fetch('https://api.petfinder.com/pet.find?key=22d46e7c691779733cabbeb71d1b0058&location='+zip+'&format=json&animal=dog')
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
   
        const lists = this.state.array.map((list, index) => (
                <li className="list-wrapper" key={index}>
                    <List
                        index={index}
                        {...list} 
                    />    
                </li>
            ));
            body = (
                <ul className="lists">
                    {lists}
                </ul>
            );
        

        return (
            
            <div>
                <h2>Find your new Pet</h2>
                <AddForm
                type="card"
                onAdd={(text, pet) => this.addZipcode(text, pet)}
                />  
                {body}
            </div>
        );
    
}
}


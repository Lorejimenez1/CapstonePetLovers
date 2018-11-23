import React from 'react';
import {connect} from 'react-redux';
import { fetchBoard} from '../actions';

import Events from './events';
import EventForm from './event-form';
import NavigationBar from './navbar';


import './app.css';

export class EventFinder extends React.Component {
    constructor(props) {
        super(props);
        
     
    }

   search(location) {

        this.props.dispatch(fetchBoard(location));
    }
   
    /*
    loadAnimals = () => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = 'http://localhost:8080/api/event/'+this.props.location
        return fetch(url)
            .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
            }).then( data => 
                this.setState({
                    array: data,
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
   
        const lists = this.props.array.map((list, index) => (
                <div className="row" key={index}>
                    <Events
                        index={index}
                        {...list} 
                    />    
                </div>
            ));
            body = 
            (
            <div>
                {lists}
            </div>
            )
                
            ;
        

        return (
        
            
            <div>
                <img className="logo" src="https://techflourish.com/images/blue-cat-paws-clipart-6.png"/>
                <h1>Find events nationwide</h1>   
                <section className="form-column">
                    <EventForm
                    type="card"
                    onAdd={(text) => this.search(text)}
                />
                </section>    
                {body}
            </div>
        
        );
    
}
}

const mapStateToProps = state => ({
    array: state.array,
});

export default connect(mapStateToProps)(EventFinder);


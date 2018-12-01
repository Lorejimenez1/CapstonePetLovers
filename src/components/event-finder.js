import React from 'react';
import {connect} from 'react-redux';
import { fetchEvents} from '../actions';

import Events from './events';
import EventForm from './event-form';
import Spinner from 'react-spinkit';

import './app.css';

export class EventFinder extends React.Component {
    renderResults() {
        if(this.props.loading) {
            return <Spinner name="cube-grid" color="purple" fadeIn='none' />;
        }
        else if(this.props.error) {
            return <h1>{this.props.error}</h1>
        }
        else if(this.props.array.length > 0) {
           const lists = this.props.array.map((list, index) => (
                <div  key={index}>
                    <Events
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
        
    
         
    };
   search(location) {
        this.props.dispatch(fetchEvents(location));
    }
   
   render() {
        
        return (
         
            <div>
                <img className="logo" src="https://techflourish.com/images/blue-cat-paws-clipart-6.png" alt="animals and paws logo"/>
                <h1>Find events like pet adoptions and fundraisers to help pets.
                For example enter california and receive realtime events and information based in that state in the U.S<br />(note: state must be in fullname format I.E Arizona) .</h1>  
                <section className="form-column">
                    <EventForm
                    type="card"
                    onAdd={(text) => this.search(text)}
                />
                </section>    
                {this.renderResults()}
            </div>
        
        );
    
    }
}

const mapStateToProps = state => ({
    array: state.array,
    error: state.error,
    loading: state.loading
});

export default connect(mapStateToProps)(EventFinder);



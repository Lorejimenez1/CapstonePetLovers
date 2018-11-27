import React from 'react';
import {connect} from 'react-redux';
import { fetchBoard} from '../actions';

import Events from './events';
import EventForm from './event-form';



import './app.css';

export class EventFinder extends React.Component {
    constructor(props) {
        super(props);
        
    }

   search(location) {
        this.props.dispatch(fetchBoard(location));
    }
   
   render() {
        let body;
   
        const lists = this.props.array.map((list, index) => (
                <div  key={index}>
                    <Events
                        index={index}
                        {...list} 
                    />    
                </div>
            ));
            body = 
            (
            <div className="row-container">
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


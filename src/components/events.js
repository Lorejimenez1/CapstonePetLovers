import React from 'react';
import './list.css';

export default class Events extends React.Component {

     render() {
        return (
                    <ul className="container" id="container">
                        <img className=" img item" src={'https://static1.squarespace.com/static/50eb5641e4b0684ae74d6dc0/t/56fc8557e32140af89ee9937/1459389790188/'} alt="" />
                    
                        <li className="item">
                            {this.props.title} 
                        </li>
                        <li className="item">
                            Powered by {this.props.host}        
                               
                        </li>
                        <li className="item">  
                            Location: {this.props.location}
                        </li>   
                        <li className="item"> 
                            {this.props.date}
                        </li>

                        <li className="item"> 
                            {this.props.details}
                        </li>
                    </ul>    
        );
    }
};

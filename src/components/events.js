import React from 'react';

//import AddForm from './add-form';
import './list.css';

export default function Events(props) {
    return (
       <ul className="container" id="container">
                            <img className=" img item" src={this.props.imgURL} alt="Company logo or image reference" />
                    
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
                                 {this.props.description}
                            </li>
                    </ul>    
                    
          
        
    );
};

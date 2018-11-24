import React from 'react';

//import AddForm from './add-form';
import './list.css';

export default function List(props) {
    return (
        
                    <ul className="container">
                            <img className=" img item" src={props.media.photos.photo[3].$t} alt="A surprising fig" />
                    
                            <li className="item">
                                    Meet {props.name.$t}/{props.breeds.breed.$t} currently in {props.contact.city.$t}   
                            </li>
                            <li className="item">    
                                    Contact: {props.contact.phone.$t} or {props.contact.email.$t}
                            </li>
                            <li className="item">    
                                    
                                    {props.description.$t}
                            </li>
                    </ul>    
             
                    
                    
          
        
    );
};


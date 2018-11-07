import React from 'react';

//import AddForm from './add-form';
import './list.css';

export default function List(props) {
    return (
         <div className="card">
            <img className="card-image" src={props.media.photos.photo[8].$t} alt="A surprising fig" />
            <div className="card-content">
                <li >
                        {props.name.$t}
                </li>
                <li>    
                        {props.breeds.breed.$t}
                </li>
                <li>    
                        {props.lastUpdate.$t}
                </li>
            </div>
         </div>           
          
        
    );
};


import React from 'react';

//import AddForm from './add-form';
import './list.css';

export default function List(props) {
    return (
        
                <div>
                    <img className="card-image"src={props.media.photos.photo[0].$t} alt="A surprising fig" />
                    <li>
                       {props.name.$t}
                    </li>
                    <li>    
                       {props.breeds.breed.$t}
                    </li>
                    <li>    
                       {props.lastUpdate.$t}
                    </li>
                </div>    
          
        
    );
};


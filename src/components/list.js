import React from 'react';

//import AddForm from './add-form';
import './list.css';

export default function List(props) {
    return (
        <div className="col-12">
            <div className="card">
                    <img className="card-image" src={props.media.photos.photo[3].$t} alt="A surprising fig" />
                    <ul className="content">
                            <li>
                                    {props.name.$t} II {props.breeds.breed.$t}
                            </li>
                            <li>    
                                    {props.description.$t}
                            </li>
                            <li>    
                                    Contact: {props.contact.phone.$t} or {props.contact.email.$t}
                            </li>
                    </ul>    
             </div>
         </div>           
                    
          
        
    );
};


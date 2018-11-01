import React from 'react';

//import AddForm from './add-form';

export default function List(props) {
    return (
        <div className="card">
            <img src={props.media.photos.photo[0].$t} alt="A surprising fig" />
            <ul>
                <li>
                    {props.name.$t}
                </li>
                <li>    
                    {props.breeds.breed.$t}
                </li>
                <li>    
                    {props.lastUpdate.$t}
                </li>
            </ul>
        </div>
    );
};


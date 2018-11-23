import React from 'react';

//import AddForm from './add-form';
import './list.css';

export default function Events(props) {
    return (
        <div className="col-12">
            <div className="card">
                    <img className="card-image" src="https://techflourish.com/images/blue-cat-paws-clipart-6.png" alt="A surprising fig" />
                  
                    <ul className="content">
                            <li>
                                    {props.title}
                            </li>
                             <li>
                                    {props.host}
                            </li>
                             <li>
                                    {props.date}
                            </li>

                    </ul>    
             </div>
         </div>           
                    
          
        
    );
};

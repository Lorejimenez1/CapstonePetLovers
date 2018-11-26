import React from 'react';

//import AddForm from './add-form';
import './list.css';

export default class List extends React.Component {
    constructor(props) {
        super(props);

    }

   
 
    render() {
         const description = this.props.description.$t
         //const description = slice.slice(0, 150);
         return (
        
                    <ul className="container" id="container">
                            <img className=" img item" src={this.props.media.photos.photo[3].$t} alt="A surprising fig" />
                    
                            <li className="item">
                                Meet {this.props.name.$t}/{this.props.breeds.breed.$t}    
                            </li>
                            <li className="item">    
                                Contact: {this.props.contact.phone.$t} or {this.props.contact.email.$t}
                            </li>
                            <li className="item">  
                                at shelter {this.props.shelterId.$t} in {this.props.contact.city.$t}
                             </li>   
                             
                            <li className="item"> 
                                 {this.props.size.$t} {this.props.age.$t}
                            </li>

                            <li className="item"> 
                                 {description}
                            </li>
                    </ul>    
               );

            
}
}


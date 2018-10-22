import React from 'react';
import ReactDOM from 'react-dom';


import {Provider} from 'react-redux';
import {createStore} from 'redux';
import CharacterSearch from './components/pet-search';
import './index.css';

const initialState = {
    dogs: {
        id: 'dogs',
        dogs: {
            0: {
            		name: '',
                id: 0,
                Location: "Phoeniz, AZ",
                Breed: "Terrier",
                About: "Young Female Terrier that is house trained, recent vacinations, and is neutered",
                imageURL: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/37746966/1/?bust=1496177137",
                contact: 'info@povertyspets.org'
            },
            1: {
            		name: 'Julian',
                id: 1,
                Location: "Prescott, AZ",
                Breed: "Golden retreiver",
                About: "Adult male with recent vacinations, and is neutered(125 dollar aoption fee)",
                imageURL: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/42679722/1/?bust=1536189087",
                contact: 'uafdogs@gmail.com '

            },
            2: {
								name: 'Sam',
                id: 2,
                Location: "Payson, AZ",
                Breed: "Australian Cattle Dog / Blue Heeler Mix",
                About: "Adult Female with recent vacinations, and is neutered(125 dollar aoption fee)",
                imageURL: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/42679722/1/?bust=1536189087",
                contact: 'hs@humanesocietycentralaz.org'
        				},
        		 3: {			
     						name: 'Same',
                id: 3,
                Location: "Payson, AZ",
                Breed: "Australian Cattle Dog / Blue Heeler Mix",
                About: "Adult Female with recent vacinations, and is neutered(125 dollar aoption fee)",
                imageURL: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/42679722/1/?bust=1536189087",
                contact: 'hs@humanesocietycentralaz.org'		
    						},
    					}
    				}
    Cats: {
        id: 'spam',
        name: "Spam",
        emails: {
            0: {
            		name: '',
                id: 0,
                Location: "Phoeniz, AZ",
                Breed: "Terrier",
                About: "Young Female Terrier that is house trained, recent vacinations, and is neutered",
                imageURL: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/37746966/1/?bust=1496177137",
                contact: 'info@povertyspets.org'
            },
            1: {
            		name: 'Julian',
                id: 1,
                Location: "Prescott, AZ",
                Breed: "Golden retreiver",
                About: "Adult male with recent vacinations, and is neutered(125 dollar aoption fee)",
                imageURL: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/42679722/1/?bust=1536189087",
                contact: 'uafdogs@gmail.com '

            },
            2: {
								name: 'Sam',
                id: 2,
                Location: "Payson, AZ",
                Breed: "Australian Cattle Dog / Blue Heeler Mix",
                About: "Adult Female with recent vacinations, and is neutered(125 dollar aoption fee)",
                imageURL: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/42679722/1/?bust=1536189087",
                contact: 'hs@humanesocietycentralaz.org'
        				},
        		 3: {			
     						name: 'Same',
                id: 3,
                Location: "Payson, AZ",
                Breed: "Australian Cattle Dog / Blue Heeler Mix",
                About: "Adult Female with recent vacinations, and is neutered(125 dollar aoption fee)",
                imageURL: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/42679722/1/?bust=1536189087",
                contact: 'hs@humanesocietycentralaz.org'		
    						},
    					}
    				}

const store = createStore(state => state, initialState);

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>
  , document.getElementById('root'));
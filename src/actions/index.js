
export const FETCH_PETS_SUCCESS = 'FETCH_PETS_SUCCESS';
export const fetchPetsSuccess = pets => ({
    type: FETCH_PETS_SUCCESS,
    pets
});
export const FETCH_PETS_ERROR = 'FETCH_PETS_ERROR';
export const fetchPetsError = error => ({
    type: FETCH_PETS_ERROR,
    error
});

export const fetchPets = (location, animal, breed) => dispatch => {
    if(breed === undefined) {
        const breed=""
    }
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = 'https://api.petfinder.com/pet.find?key=22d46e7c691779733cabbeb71d1b0058&location='+location+'&format=json&animal='+animal+'&count=6&breed='+breed; 
    return fetch(proxyurl + url)
            .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(data => {
            dispatch(fetchPetsSuccess(data.petfinder.pets.pet));
        });
  

};

 

export const FETCH_EVENTS_ERROR = 'FETCH_EVENTS_ERROR';
export const fetchEventsError = error => ({
    type: FETCH_EVENTS_ERROR,
    error
});


export const FETCH_EVENTS_SUCCESS = 'FETCH_EVENTS_SUCCESS';
export const fetchEventsSuccess = array => ({
    type: FETCH_EVENTS_SUCCESS,
    array
});

export const fetchEvents = location =>   dispatch => {
        const url = 'https://stark-plateau-21732.herokuapp.com/api/event/'+location
        return fetch(url)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(array => {
            dispatch(fetchEventsSuccess(array))
        });
        
        
};
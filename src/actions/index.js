
export const FETCH_PETS_SUCCESS = 'FETCH_PETS_SUCCESS';
export const fetchPetsSuccess = pets => ({
    type: FETCH_PETS_SUCCESS,
    pets
});

export const fetchPets = (location, animal, breed) => dispatch => {
    if(breed == undefined) {
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

 


export const FETCH_BOARD_SUCCESS = 'FETCH_BOARD_SUCCESS';
export const fetchBoardSuccess = array => ({
    type: FETCH_BOARD_SUCCESS,
    array
});

export const fetchBoard = location =>   dispatch => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = 'https://stark-plateau-21732.herokuapp.com/'+location
        return fetch(url)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(array => {
            dispatch(fetchBoardSuccess(array));
        });
};
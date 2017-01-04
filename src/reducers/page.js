const initialState = {
    year: 2017,
    photos: []
};

export default function page(state=initialState, action){
    switch (action.type){
        case 'SELECT_YEAR':
            return {...state, year: action.payload};
        default:
            return state
    }
}
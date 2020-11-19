import { PUT_DATA } from './actions';

const initialState = {
    data: []
};

export const reducer = (state = initialState, action) => {
    
    if(action.type === PUT_DATA) {
        console.log(action)
        return {
            ...state,
            data: action.data
        }
    }

    return state;
}

import { STATUSCHANGE } from "./actionTypes";
import initialState from "./initialState";


const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case STATUSCHANGE:
            return {
                ...state,
                status: action.payload
            }
    
        default:
            break;
    }
};

export default filterReducer;
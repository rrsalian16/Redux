import * as actionTypes from '../actions/actionsTypes';
import {updateObject} from '../utility';

const initialState = {
    result: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return updateObject(state, {result: state.result.concat(action.counter)})
            
        case actionTypes.DELETE_RESULT:
            const updatedArray = state.result.filter(
                (res, index) => index !== action.resId
            );
            return updateObject(state, {
                result: updatedArray
            })
        default:
            break;
    }
    return state;
};

export default reducer;
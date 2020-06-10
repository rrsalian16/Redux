import * as actionTypes from '../actions';

const initialState = {
    result: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                result: state.result.concat(action.counter),
            };
        case actionTypes.DELETE_RESULT:
            const updatedArray = state.result.filter(
                (res, index) => index !== action.resId
            );
            return {
                ...state,
                result: updatedArray,
            };

        default:
            break;
    }
    return state;
};

export default reducer;
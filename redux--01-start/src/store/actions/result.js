import * as actionTypes from './actionsTypes';


export const saveResult = (res) => {
    return {
        type: actionTypes.STORE_RESULT,
        counter: res
    };
}

export const storeResult = (value) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(saveResult(value));
        }, 3000);
    }

};

export const deleteResult = (value) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resId: value
    };
};
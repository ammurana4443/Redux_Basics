//reducers

import { combineReducers } from "redux";

const countReducer = (state = 1, action) => {

    switch (action.type) {
        case "INCREMENT": return state + 1;
        case "DECREMENT": return state - 1;
        default: return state;
    }

}
const reducers = combineReducers({
count : countReducer //it will save the porperty
})

export default reducers;
//reducers

const countReducer = (state, action) => {

    switch (action.type) {
        case "INCREMENT": return state + 1;
        case "DECREMANT": return state - 1;
        default: return state;  
    }

}
import { combineReducers } from "redux";





//Define reducer function
const initialState = { count: 0};

const countReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case 'INCREMENT':
            return{...state, count: state.count + 1};
        default:
            return state;
    }
};

export const increment = () => ({
  type: "INCREMENT",
});

export const rootReducer = combineReducers({
    count: countReducer,
});




import { FETCHING, SUCCESS, ERROR , ADD_ERROR ,ADD_FRIEND, ADD_SUCCESS } from '../actions';

const initialState = {
        friends: [],
        error: null,
        fetching: false
}
export default function friendReducer(state = initialState, action) {
    switch (action.type) {

        case FETCHING:
          return {...state, fetching: true}

        case SUCCESS:
          return {
            ...state,
            error : null,
            friends: action.payload,
            fetching: false
          }
        case ERROR :
          return { ...state, error: action.payload, fetching: false }
    
        case ADD_SUCCESS:
          return {...state, error: null, friends: action.payload}
    
        case ADD_FRIEND:
          return {...state, adding: true}
    
        case ADD_ERROR:
          return {
              ...state, 
              error: action.payload
          }

        default:
          return state;
    }
}

    
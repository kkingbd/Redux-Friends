import axios from 'axios';
export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';

export const ADD_FRIEND = 'ADD_FRIEND';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ADD_ERROR = 'ADD_ERROR';

const URL = 'http://localhost:5000/api/friends';

// export const fetchFriends = () => dispatch =>{
//     dispatch({type: FETCHING});
//     axios
//         .get('http://localhost:5000/api/friends')
//         .then(res => dispatch({
//             type: SUCCESS,
//             PAYLOAD: res.data
//         }))
//         .catch(err => dispatch({
//             type: ERROR,
//             payload : err
//         }))
// }
export const fetchFriends = () => {
    const friends = axios.get(`${URL}/get`);
    return dispatch => {
      dispatch({ type: FETCHING });
      friends
        .then(response => {
          dispatch({ type: SUCCESS, payload: response.data });
        })
        .catch(err => {
          dispatch({ type: ERROR, payload: err });
        });
    };
  };
  
export const addFriend = friend => dispatch => {
    dispatch({type: ADD_FRIEND});
    axios
        .post('http://localhost:5000/api/friends', friend)
        .then(res => dispatch({
            type: ADD_SUCCESS,
            payload: res.data
        }))
        .catch(err => dispatch({
            type:  ADD_ERROR,
            payload: err
        }));
}

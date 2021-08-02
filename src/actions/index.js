import axios from 'axios';

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';
export const ADD_SMURFS = 'ADD_SMURFS';
export const ERROR = 'ERROR';



export const fetchSmurfs = () =>{
    return(dispatch) =>{
        dispatch({ type: FETCH_START });

        axios
        .get('http://localhost:3333/smurfs')
        .then((response) => {
            dispatch({ type: FETCH_SUCCESS, payload: response.data });
          })
          .catch((err) => {
            dispatch({ type: FETCH_FAIL, payload: err });
          });
    }
}

export const errorAction = (error) => {
    return {
      type: ERROR,
      payload: error,
    };
  };
  
  export const addSmurfs = ({ name, nickname, position, summary, id }) => {
    return {
      type: ADD_SMURFS,
      payload: { name, nickname, position, summary, id },
    };
  };
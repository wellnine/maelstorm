import * as actionTypes from "./types";

function fetchDataInitAction() {
  return {
    type : actionTypes.GENRE_FETCH_DATA_INIT,
    payload : {
      data : null,
      pending : true,
      error : null
    }
  }
}

function fetchDataSuccessAction(data) {
  console.log("-- data --");
  return {
    type : actionTypes.GENRE_FETCH_DATA_SUCCESS,
    payload : {
      data : data,
      pending : false,
      error : null
    }
  }
}

function fetchDataFailAction() {

  return {
    type : actionTypes.GENRE_FETCH_DATA_FAIL,
    payload : {
      data : null,
      pending : false,
      error : null
    }
  }
}

function fetchDataErrorAction(e) {

  return {
    type : actionTypes.GENRE_FETCH_DATA_ERROR,
    payload : {
      data : null,
      pending : false,
      error : e
    }
  }
}

// works
export function  fetchGenreAction() {
  return dispatch => {
    console.log("fetch genre");

    dispatch(fetchDataInitAction());

    return fetch('https://freemusicarchive.org/api/get/genres.json?api_key=KUC6IU4SGXXY11AP')
      .then((response) => response.json())
      .then(responseJson => {
        console.log(responseJson);
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
  };

};
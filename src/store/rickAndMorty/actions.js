import { createAction } from "@reduxjs/toolkit";

export const getData = createAction("GETTODOS");

export const fetchData = () => {
  return async (dispatch) => {
    await fetch(`https://rickandmortyapi.com/api/character`)
      .then((response) => response.json())
      .then((json) => dispatch(getData(json)));
  };
};

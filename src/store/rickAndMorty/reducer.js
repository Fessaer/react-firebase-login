import { createReducer } from "@reduxjs/toolkit";
import { getData } from "./actions";

export default createReducer(
  {},
  {
    [getData.type]: (data, actions) => {
      data["data"] = actions.payload;
    },
  }
);

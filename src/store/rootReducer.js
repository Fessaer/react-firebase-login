import { combineReducers } from "redux";
import rickAndMorty from "./rickAndMorty/reducer";
import contacts from "./contacts/reducer";

export default combineReducers({
  rickAndMorty: rickAndMorty,
  contacts: contacts,
});

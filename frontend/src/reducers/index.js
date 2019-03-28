import { combineReducers } from "redux";
import EquipementsReducer from "./reducer_equipements";
import EquipementReducer from "./reducer_equipement";
import { reducer as formReducer } from 'redux-form'
 const rootReducer = combineReducers({
    equipements: EquipementsReducer,
    equipement:EquipementReducer,
    form: formReducer
  });
  export default rootReducer;
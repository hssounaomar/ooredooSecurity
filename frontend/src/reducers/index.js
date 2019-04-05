import { combineReducers } from "redux";
import EquipementsReducer from "./equipements.reducer";
import EquipementReducer from "./equipement.reducer";
import { reducer as formReducer } from 'redux-form'
 const rootReducer = combineReducers({
    equipements: EquipementsReducer,
    equipement:EquipementReducer,
    form: formReducer
  });
  export default rootReducer;
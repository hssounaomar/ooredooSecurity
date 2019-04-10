import { combineReducers } from "redux";
import EquipementsReducer from "./equipements.reducer";
import SitesReducer from "./sites.reducer";
import EquipementReducer from "./equipement.reducer";
import SitesTypeReducer from "./sitestype.reducer";
import { reducer as formReducer } from 'redux-form'
 const rootReducer = combineReducers({
    equipements: EquipementsReducer,
    equipement:EquipementReducer,
    sites:SitesReducer,
    sitesType:SitesTypeReducer,
    form: formReducer
  });
  export default rootReducer;
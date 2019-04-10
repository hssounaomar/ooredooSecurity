import axios from "axios";
const ROOT_URL = "http://localhost:4000/equipements";
export const GET_EQUIPEMENTS="GET_EQUIPEMENTS";
export const GET_EQUIPEMENT="GET_EQUIPEMENT";
export const UPDATE_EQUIPEMENT="UPDATE_EQUIPEMENT";
export const REMOVE_EQUIPEMENT="REMOVE_EQUIPEMENT";
export const ADD_EQUIPEMENT="ADD_EQUIPEMENT";
export const RECEIVE_EQUIPEMENT="RECEIVE_EQUIPEMENT";
export function addEquipement(equipement){

 const request=   axios.post(`${ROOT_URL}/add`,equipement).then(res=>res.data);

 return {    
  type:ADD_EQUIPEMENT,
  payload:request
}

}
export function getEquipements(){
    const request = axios.get(`${ROOT_URL}/`);
    return {
      type: GET_EQUIPEMENTS,
      payload: request
    };
}
export function updateEquipement(equipement){
  axios.post(`${ROOT_URL}/update/`+equipement._id, equipement);
  return {
    type :UPDATE_EQUIPEMENT,
    payload:equipement
  };
}
export function deleteEquipementById(id){
  axios.delete(`${ROOT_URL}/delete/`+id);
 return {
   type:REMOVE_EQUIPEMENT,
   payload:id
 }
 
}
export function getEquipementById(id){
  const request = axios.get(`${ROOT_URL}/`+id).then(res=>res.data);

  return {
    type :RECEIVE_EQUIPEMENT,
    payload:request
  }
}


import axios from "axios";
const ROOT_URL = "http://localhost:4000/equipements/types";
export const GET_EQUIPEMENTSTYPES="GET_EQUIPEMENTSTYPES";
export const GET_EQUIPEMENTTYPE="GET_EQUIPEMENTTYPE";
export const UPDATE_EQUIPEMENTTYPE="UPDATE_EQUIPEMENTTYPE";
export const REMOVE_EQUIPEMENTTYPE="REMOVE_EQUIPEMENTTYPE";
export const ADD_EQUIPEMENTTYPE="ADD_EQUIPEMENTTYPE";
export const RECEIVE_EQUIPEMENTTYPE="RECEIVE_EQUIPEMENTTYPE";
export function addEquipement(equipementType){

 const request=   axios.post(`${ROOT_URL}/add`,equipementType).then(res=>res.data);

 return {    
  type:ADD_EQUIPEMENTTYPE,
  payload:request
}

}
export function getEquipementsTypes(){
    const request = axios.get(`${ROOT_URL}/`);
    return {
      type: GET_EQUIPEMENTSTYPES,
      payload: request
    };
}
export function updateEquipementType(equipementType){
  axios.post(`${ROOT_URL}/update/`+equipementType._id, equipementType);
  return {
    type :UPDATE_EQUIPEMENTTYPE,
    payload:equipementType
  };
}
export function deleteEquipementTypeById(id){
  axios.delete(`${ROOT_URL}/delete/`+id);
 return {
   type:REMOVE_EQUIPEMENTTYPE,
   payload:id
 }
 
}
export function getEquipementTypeById(id){
  const request = axios.get(`${ROOT_URL}/`+id).then(res=>res.data);

  return {
    type :RECEIVE_EQUIPEMENTTYPE,
    payload:request
  }
}


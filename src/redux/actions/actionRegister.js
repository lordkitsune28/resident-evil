import {  getAuth, createUserWithEmailAndPassword, updateProfile  } from "@firebase/auth";
import { types } from "../types/types";

export const registroEmailPasswordNombre = (email,password,name) => {
    return(dispatch) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth,email,password)
        .then(async ({user}) => {

           await updateProfile(auth.currentUser, {displayName: name})

           dispatch(registerSincrono(user.email,user.uid,user.displayName))
            
        })
        .catch(e =>{
          alert("Ese correo ya ha sido registrado con anterioridad")
        })
    }
}

export const registerSincrono = (email,password,name) => {

    return{
       type: types.register,
       payload: {
           email,
           password,
           name
       }
    }
}
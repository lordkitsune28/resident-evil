import { db } from "../../firebase/firebaseConfig";
import { addDoc, collection, getDocs } from "@firebase/firestore";
import { typesScore } from "../types/types";

export const listScore = () => {
    return async (dispatch) => {
        const querySnapshot = await getDocs(collection(db, "puntaje"));
        const punto = [];
        querySnapshot.forEach((doc) => {
            punto.push({
                ...doc.data()
            })
        });
        dispatch(list(punto));
    }
}

export const list = (puntos) => {
    return {
        type: typesScore.list,
        payload: puntos
    }
}

export const registerPunto = (round, aprobado, trofeos) => {
    return (dispatch) => {
        const newScore = {
            round, aprobado, trofeos
        }
        addDoc(collection(db, "puntaje"), newScore)
        .then(resp => {
            dispatch(registroScoresincrono(newScore))
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export const registroScoresincrono = (punto) => {
    return {
        type: typesScore.agregar,
        payload: punto
    }

}
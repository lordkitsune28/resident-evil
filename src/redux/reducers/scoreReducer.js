import { typesScore } from "../types/types"


const initialState = {
    score: []
}

export const scoreReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesScore.register:
            return {
                score: [action.payload]
            }
        case typesScore.list:
            return {
                score: [...action.payload]
            }
        case typesScore.edit:
            return {
                ...state,
            };
        case typesScore.delete:
            return {
                score: state.score.filter(est => est.score !== action.payload)
            }

        default:
            return state
    }
}

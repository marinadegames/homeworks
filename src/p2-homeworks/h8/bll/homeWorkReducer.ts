// imports
import {UserType} from "../HW8";

// types
export type ActionType = SortActionType | CheckActionType
export type SortActionType = {
    type: 'check'
    payload: number
}
export type CheckActionType = {
    type: 'sort'
    payload: 'up' | 'down'
}

// reducers
export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => {
    switch (action.type) {
        case 'sort': {
            if (action.payload === 'up') return [...state].sort((a, b) => a.age > b.age ? 1 : -1)
            if (action.payload === 'down') return [...state].sort((a, b) => a.age > b.age ? -1 : 1)
            else return state
        }
        case 'check': {
            return state.filter( p => p.age >= 18)
        }
        default: return state
    }
}
// imports


// types
export type loadingACType = {
    type: 'LOAD'
    text: string
}
export type initStateType = {
    text: string
}


// initState
const initState = {
    text: ''
}


// reducer
export const loadingReducer = (state = initState, action: loadingACType): initStateType => {
    switch (action.type) {
        case 'LOAD': {
            return {...state, text: action.text}
        }
        default: return state
    }
}


// AC
export const loadingAC = (text: string): loadingACType => {
    return {type: 'LOAD', text}
}


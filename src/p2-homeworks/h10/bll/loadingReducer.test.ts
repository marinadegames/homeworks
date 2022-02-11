// imports
import {initStateType, loadingAC, loadingReducer} from "./loadingReducer";




// tests
test ('LOAD', () => {

    const startState: initStateType = {
        text: ''
    }
    const text = 'DOWNLOAD COMPLETE'
    const action = loadingAC(text)
    const endState = loadingReducer(startState, action)

    expect(endState.text).toBe(text)
})
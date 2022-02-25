// imports
import {changeThemeAC, themeReducer, ThemesType} from "./themeReducer";


// tests
test ('CHANGE THEME', () => {
    const startState:ThemesType = 'dark'
    const newTheme = 'some'
    const action = changeThemeAC(newTheme)
    const endState = themeReducer(startState, action)
    expect(endState).toBe(newTheme)
})
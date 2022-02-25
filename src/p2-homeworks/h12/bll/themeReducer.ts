// imports


// types
export type ThemesType = 'dark' | 'red' | 'some'
type changeThemeAC = {
    type: "CHANGE_THEME"
    selectedTheme: ThemesType
}


// initial state
const initState: ThemesType = 'dark'

// reducer
export const themeReducer = (state = initState, action: changeThemeAC): ThemesType => {
    switch (action.type) {
        case "CHANGE_THEME":
            return action.selectedTheme
        default:
            return state;
    }
};


// Action creator
export const changeThemeAC = (selectedTheme: ThemesType): changeThemeAC => {
    return {type: "CHANGE_THEME", selectedTheme}
};
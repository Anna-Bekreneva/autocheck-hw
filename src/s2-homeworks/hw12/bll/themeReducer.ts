const initState: stateType = {
    themeId: 1,
}

type changeThemeIdAT = ReturnType<typeof changeThemeId>

type ActionType = changeThemeIdAT

type stateType = {
    themeId: number
}

export const themeReducer = (state = initState, action: ActionType): stateType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
            const result = {...state, themeId: action.id}
            console.log(result)
            return result

        default:
            return state
    }
}

export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id } as const) // fix any

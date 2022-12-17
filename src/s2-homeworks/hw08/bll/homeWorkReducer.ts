import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            switch (action.payload) {
                case 'up' : {
                    return [...state.sort((a, b) => a.name >= b.name ? 1 : -1)]
                }

                case 'down': {
                    return [...state.sort((a, b) => a.name <= b.name ? 1 : -1)]
                }
            }
            return state // need to fix
        }
        case 'check': {
            return state.filter(user => user.age === action.payload || user.age > action.payload)
        }
        default:
            return state
    }
}

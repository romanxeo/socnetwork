import {Dispatch} from "redux"
import {getAuthUserData} from "./authReducer"

// actions
export const setInitializedAC = (isInitialized: boolean) => {
  return {type: 'APP/SET-INITIALIZED', isInitialized} as const
}

// types
export type setInitializedAT = ReturnType<typeof setInitializedAC>

type ActionsType = setInitializedAT

//state
const initialState = {
  initialized: false
}

type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case 'APP/SET-INITIALIZED':
      return {...state, initialized: action.isInitialized}
    default:
      return state
  }
}

//thunk
export const initializeTC = (isInitialized: boolean) => async (dispatch: any) => {
  await dispatch(getAuthUserData())
  dispatch(setInitializedAC(isInitialized))
}

/*
//thunk
export const initializeTC = (isInitialized: boolean) => {
  return (dispatch: any) => {
    dispatch(getAuthUserData())
      .then(() => {
        dispatch(setInitializedAC(isInitialized))
      })
  }
}*/

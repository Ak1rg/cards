import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { IAppState } from "./types/appState";
import  appReducer  from "./reducers/appReducer";

export interface IState{
    app:IAppState
}

export const store = configureStore({
    reducer:{
        app:appReducer,
    },
})


export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
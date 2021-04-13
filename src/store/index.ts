import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { counterSlice } from "~/store/slices/counter";
import { userSlice } from "~/store/slices/user";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    user: userSlice.reducer
  }
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

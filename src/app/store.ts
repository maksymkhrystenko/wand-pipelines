import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import workingAreaReducer from '../pages/board/modules/working-area/slices/working-area-slice';

export const store = configureStore({
  reducer: {
    workingArea: workingAreaReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

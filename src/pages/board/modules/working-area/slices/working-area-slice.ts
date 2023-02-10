import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../../../../app/store';
import {BlockNodeData} from '../components/block-node/block-node';

export interface WorkingAreaState {
  blockNode: null | BlockNodeData;
  isSetToWorkingArea: boolean
}

const initialState: WorkingAreaState = {
  blockNode: null,
  isSetToWorkingArea: false
};

export const workingAreaSlice = createSlice({
  name: 'workingArea',
  initialState,
  reducers: {
    setBlockNode: (state, action: PayloadAction<BlockNodeData| null>) => {
      state.blockNode = action.payload;
    },
    setIsSetToWorkingArea: (state, action: PayloadAction<boolean>) => {
      state.isSetToWorkingArea = action.payload;
    }
  }
});

export const { setBlockNode, setIsSetToWorkingArea } = workingAreaSlice.actions;

export const selectBlockNode = (state: RootState) => state.workingArea.blockNode as BlockNodeData;
export const selectIsSetToWorkingArea = (state: RootState) => state.workingArea.isSetToWorkingArea;

export default workingAreaSlice.reducer;

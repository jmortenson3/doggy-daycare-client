import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface IContext {
  organizationId: number;
  locationId?: number;
}

interface LocationContextState {
  context?: IContext;
}

const initialState: LocationContextState = {};

export const locationContextSlice = createSlice({
  name: 'ctx',
  initialState,
  reducers: {
    setLocationContext: (state, action: PayloadAction<IContext>) => {
      console.log(JSON.stringify(action.payload));
      state.context = action.payload;
    },
  },
});

export const { setLocationContext } = locationContextSlice.actions;

export const selectLocationContext = (state: RootState) =>
  state.context.context;

export default locationContextSlice.reducer;

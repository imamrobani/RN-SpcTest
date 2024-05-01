import {createSlice} from '@reduxjs/toolkit';
import {ServiceList} from '@constants';

type InitStateProps = {
  services: Service[];
};

const initialState: InitStateProps = {
  services: ServiceList,
};

export const serviceSlice = createSlice({
  name: 'service',
  initialState,
  reducers: {
    updateBookmark: (state, action) => {
      state.services = state.services.map(service => {
        if (service.id === action.payload) {
          service.isBookmark = !service.isBookmark;
        }
        return service;
      });
    },
  },
});

export const {updateBookmark} = serviceSlice.actions;
export default serviceSlice.reducer;

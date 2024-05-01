import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getDataStorage, storeDataStorage} from '@libraries';
import {ServiceList} from '@constants';

export const getServices = createAsyncThunk('service/fetch-service', () => {
  const isFirstLoad = getDataStorage('FIRST_LOAD');
  if (isFirstLoad) {
    const storageService = getDataStorage('SERVICE') || [];
    return storageService;
  }
  return ServiceList;
});

type InitStateProps = {
  services: Service[];
};

const initialState: InitStateProps = {
  services: [],
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

      storeDataStorage('SERVICE', state.services);
    },
  },
  extraReducers: builder => {
    builder.addCase(getServices.fulfilled, (state, action) => {
      state.services = action.payload;
    });
  },
});

export const {updateBookmark} = serviceSlice.actions;
export default serviceSlice.reducer;

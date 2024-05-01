import {createSlice} from '@reduxjs/toolkit';

type InitStateProps = {
  services: Service[];
};

const initialState: InitStateProps = {
  services: [
    {
      id: 1,
      name: 'Jhon Doe',
      service: 'House Cleaning',
      price: '$ 200',
      rating: '4.8',
      reviews: '8,289',
      image: 'https://picsum.photos/400/400?random=1',
      category: 'cleaning',
      isRecommended: true,
      isBookmark: true,
    },
    {
      id: 2,
      name: 'Alice Smith',
      service: 'Kitchen Deep Cleaning',
      price: '$ 150',
      rating: '4.5',
      reviews: '6,512',
      image: 'https://picsum.photos/400/400?random=2',
      category: 'cleaning',
      isRecommended: true,
      isBookmark: false,
    },
    {
      id: 3,
      name: 'Bob Johnson',
      service: 'Wall Painting',
      price: '$ 300',
      rating: '4.9',
      reviews: '12,345',
      image: 'https://picsum.photos/400/400?random=3',
      category: 'painting',
      isRecommended: false,
      isBookmark: false,
    },
    {
      id: 4,
      name: 'Mark Spacer',
      service: 'Haircut & Beard Trim',
      price: '$ 39',
      rating: '4.8',
      reviews: '10,786',
      image: 'https://picsum.photos/400/400?random=4',
      category: 'barber',
      isRecommended: false,
      isBookmark: false,
    },
    {
      id: 5,
      name: 'Emily White',
      service: 'Dry Cleaning Service',
      price: '$ 50',
      rating: '4.7',
      reviews: '9,213',
      image: 'https://picsum.photos/400/400?random=6',
      category: 'cleaning',
      isRecommended: false,
      isBookmark: false,
    },
  ],
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

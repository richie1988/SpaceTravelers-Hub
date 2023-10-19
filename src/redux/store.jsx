import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './MissionSlices';
import rocketsReducer from './RocketSlices';
import dragonsReducer from './DragonSlices';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionsReducer,
    dragons: dragonsReducer,
  },
});

export default store;

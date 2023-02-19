import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

const rootReducer = combineReducers({
  // motorcycles: motorcyclesReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// export { fetchMotorcycles };

export default store;

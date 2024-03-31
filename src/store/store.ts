import {Action, combineReducers, configureStore} from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';

import {persistor} from './persistor';
import {AppState} from './app-state';

import {medicationsReducer, medicationNotesReducer} from './state';

const persistConfig = {
  key: 'root',
  version: 1,
  storage: persistor,
  timeout: 0,
  whitelist: ['medications', 'medicationNotes'],
};

const rootReducer = combineReducers({
  medications: medicationsReducer,
  medicationNotes: medicationNotesReducer,
});

const resettableRootReducer = (state: any, action: Action) => {
  if (action.type === 'store/reset') {
    return rootReducer(undefined, action);
  }

  return rootReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, resettableRootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const storePersister = persistStore(store);
export type RootState = AppState & ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

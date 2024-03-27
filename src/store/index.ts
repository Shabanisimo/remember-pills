import {useAppDispatch, useAppSelector} from './hooks';
import {persistor} from './persistor';
import {store} from './store';
import type {RootState} from './store';

export * from './state';

export {useAppDispatch, useAppSelector, persistor, store, RootState};

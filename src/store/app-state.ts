import {PersistState} from 'redux-persist';

import {MedicationsState} from './state';

export interface AppState {
  _persist: PersistState;
  medications: MedicationsState;
}

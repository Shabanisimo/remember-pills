import {PersistState} from 'redux-persist';

import {MedicationsNotesState, MedicationsState} from './state';

export interface AppState {
  _persist: PersistState;
  medications: MedicationsState;
  medicationNotes: MedicationsNotesState;
}

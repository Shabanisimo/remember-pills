import {createSelector} from '@reduxjs/toolkit';

import {AppState} from '../../app-state';

const eventsSelector = (state: AppState) => state.medicationNotes;

export const getNoteByMedicationId = (id: string) =>
  createSelector(eventsSelector, state => {
    return state.medicationNotes[id] || [];
  });

import {createSelector} from '@reduxjs/toolkit';
import {AppState} from '../../app-state';
import {IMedication} from '../../../models';

const eventsSelector = (state: AppState) => state.medications;

export const getMedicationById = (id: string) =>
  createSelector(eventsSelector, state => {
    return state.medications.find(
      medication => medication.id === id,
    ) as IMedication;
  });

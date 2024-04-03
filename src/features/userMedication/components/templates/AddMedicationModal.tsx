import React, {forwardRef} from 'react';
import {BottomSheetModal} from '@gorhom/bottom-sheet';

import {MedicationForm} from '../../../../components/templates/MedicationForm';
import {BottomSheet} from '../../../../components/molecules/BottomSheet';
import {createMedication, useAppDispatch} from '../../../../store';
import {IMedicationForm} from '../../../../models';

export const AddMedicationModal = forwardRef<BottomSheetModal>((_, ref) => {
  const dispatch = useAppDispatch();

  const handleClose = () => {
    /* @ts-ignore */
    ref?.current?.dismiss();
  };

  const onSubmit = (data: IMedicationForm) => {
    dispatch(createMedication(data));
    setTimeout(() => handleClose(), 50);
  };

  return (
    <BottomSheet ref={ref}>
      <MedicationForm onSubmit={onSubmit} />
    </BottomSheet>
  );
});

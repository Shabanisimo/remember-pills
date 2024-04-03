import React, {forwardRef} from 'react';
import {BottomSheetModal} from '@gorhom/bottom-sheet';

import {MedicationForm} from '../../../../components/templates/MedicationForm';
import {BottomSheet} from '../../../../components/molecules/BottomSheet';
import {
  getMedicationById,
  updateMedication,
  useAppDispatch,
  useAppSelector,
} from '../../../../store';
import {IMedicationForm} from '../../../../models';

type Props = {
  medicationId: string;
};

export const UpdateMedicationModal = forwardRef<BottomSheetModal, Props>(
  ({medicationId}, ref) => {
    const dispatch = useAppDispatch();

    const medication = useAppSelector(getMedicationById(medicationId));

    const handleClose = () => {
      /* @ts-ignore */
      ref?.current?.dismiss();
    };

    const onSubmit = (data: IMedicationForm) => {
      dispatch(
        updateMedication({
          ...data,
          id: medication.id,
          isActive: data.initialCount < data.destinationCount,
          createdAt: medication.createdAt,
          updatedAt: medication.updatedAt,
        }),
      );
      setTimeout(() => handleClose(), 50);
    };

    return (
      <BottomSheet ref={ref}>
        <MedicationForm initialData={medication} onSubmit={onSubmit} />
      </BottomSheet>
    );
  },
);

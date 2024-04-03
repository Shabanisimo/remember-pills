import React, {useMemo, useRef} from 'react';
import {FlatList} from 'react-native';
import {BottomSheetModal} from '@gorhom/bottom-sheet';

import {MedicationItem} from '../components/molecules';
import {AddMedicationModal} from '../components/templates/AddMedicationModal';
import {Button, SafeAreaView} from '../../../components/atoms';
import {useAppSelector} from '../../../store';
import {IMedication} from '../../../models';
import {sortMedicationsByUpdateDate} from '../../../utils/sort';

export const UserMedication = () => {
  const addMedicationModalRef = useRef<BottomSheetModal>(null);

  const {medications} = useAppSelector(state => state.medications);

  const onOpenMedicationModal = () => {
    addMedicationModalRef?.current?.present();
  };

  const sortedMedications = useMemo(
    () => sortMedicationsByUpdateDate(medications),
    [medications],
  );

  return (
    <SafeAreaView flex={1} padding="xl" gap="m">
      <FlatList
        data={sortedMedications}
        renderItem={({item}: {item: IMedication}) => (
          <MedicationItem {...item} />
        )}
      />
      <Button title="Add medication" onPress={onOpenMedicationModal} />
      <AddMedicationModal ref={addMedicationModalRef} />
    </SafeAreaView>
  );
};

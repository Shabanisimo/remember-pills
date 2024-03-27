import React, {useMemo, useRef} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {MedicationItem} from '../components/molecules';
import {AddMedicationModal} from '../components/templates/AddMedicationModal';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {Button} from '../../../components/atoms';
import {useAppSelector} from '../../../store';
import {IMedication} from '../../../models';

export const UserMedication = () => {
  const addMedicationModalRef = useRef<BottomSheetModal>(null);

  const {medications} = useAppSelector(state => state.medications);

  const onOpenMedicationModal = () => {
    addMedicationModalRef?.current?.present();
  };

  const sortedMedications = useMemo(() => {
    return medications.slice().sort((a, b) => {
      return new Date(b.updatedAt).valueOf() - new Date(a.updatedAt).valueOf();
    });
  }, [medications]);

  return (
    <SafeAreaView style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

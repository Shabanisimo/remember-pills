import React, {useMemo, useRef} from 'react';
import {StyleSheet} from 'react-native';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import Animated, {CurvedTransition} from 'react-native-reanimated';

import {MedicationItem} from '../components/molecules';
import {AddMedicationModal} from '../components/templates/AddMedicationModal';
import {Button, SafeAreaView} from '../../../components/atoms';
import {useAppSelector} from '../../../store';
import {IMedication} from '../../../models';
import {sortMedicationsByUpdateDate} from '../../../utils/sort';
import {SPACING} from '../../../theme/spacing';

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

  const renderItem = ({item, index}: {item: IMedication; index: number}) => (
    <MedicationItem index={index} {...item} />
  );

  return (
    <SafeAreaView flex={1} padding="xl">
      <Animated.FlatList
        data={sortedMedications}
        renderItem={renderItem}
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        keyExtractor={item => item.id}
        itemLayoutAnimation={CurvedTransition.duration(400)}
        showsVerticalScrollIndicator={false}
      />
      <Button title="Add medication" onPress={onOpenMedicationModal} />
      <AddMedicationModal ref={addMedicationModalRef} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  contentContainer: {
    gap: SPACING.m,
    paddingBottom: SPACING.xl,
  },
});

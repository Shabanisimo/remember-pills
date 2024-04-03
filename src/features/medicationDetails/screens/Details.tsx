import React, {useCallback, useRef} from 'react';

import {
  getMedicationById,
  updateMedication,
  useAppDispatch,
  useAppSelector,
} from '../../../store';
import {MedicationNotes, UpdateMedicationModal} from '../components/templates';
import {Box, SafeAreaView, ScrollView, Text} from '../../../components/atoms';
import {RootStackScreenProps} from '../../../navigation/types';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {Header} from '../components/organisms';
import {SPACING} from '../../../theme/spacing';
import {Counter} from '../../../components/molecules';
import {StyleSheet} from 'react-native';

export const Deatils = ({route}: RootStackScreenProps<'MedicationDetails'>) => {
  const {medicationId} = route.params;

  const updateMedicationModalRef = useRef<BottomSheetModal>(null);

  const dispatch = useAppDispatch();

  const medication = useAppSelector(getMedicationById(medicationId));

  const onChange = (val: number) => {
    dispatch(
      updateMedication({
        ...medication,
        isActive: val < medication.destinationCount,
        initialCount: val,
      }),
    );
  };

  const onOpenMedicationModal = useCallback(() => {
    updateMedicationModalRef?.current?.present();
  }, []);

  return (
    <>
      <SafeAreaView flex={1} edges={['bottom']}>
        <Header
          title={medication?.name}
          medicationId={medicationId}
          onHandleEdit={onOpenMedicationModal}
        />
        <Box
          flex={1}
          bg="ternary"
          borderTopLeftRadius={SPACING.m}
          borderTopRightRadius={SPACING.m}>
          <ScrollView p="xl" contentContainerStyle={styles.content}>
            <Text color="black" variant="description">
              {medication?.description}
            </Text>
            <Box variant="row">
              <Counter
                onChange={onChange}
                value={medication?.initialCount}
                incrementDisabled={
                  medication?.initialCount === medication?.destinationCount
                }
              />
              <Text color="black" variant="bold" ml="s">
                / {medication.destinationCount}
              </Text>
            </Box>
            <MedicationNotes medicationId={medicationId} />
          </ScrollView>
        </Box>
      </SafeAreaView>
      <UpdateMedicationModal
        medicationId={medicationId}
        ref={updateMedicationModalRef}
      />
    </>
  );
};

const styles = StyleSheet.create({
  content: {
    gap: SPACING.l,
  },
});

import React from 'react';
import {
  deleteMedication,
  getMedicationById,
  useAppDispatch,
  useAppSelector,
} from '../../../store';
import {Text} from 'react-native';
import {MedicationNotes} from '../components/templates/MedicationNotes';
import {Button, SafeAreaView} from '../../../components/atoms';

export const Deatils = ({navigation, route}) => {
  const {medicationId} = route.params;

  const dispatch = useAppDispatch();
  console.log('medicationId', medicationId);
  const medication = useAppSelector(getMedicationById(medicationId));

  const onDeleteMedication = () => {
    dispatch(deleteMedication(medicationId));
    navigation.goBack();
  };

  return (
    <SafeAreaView>
      <Text>{medication.name}</Text>
      <Text>{medication.description}</Text>
      <MedicationNotes medicationId={medicationId} />
      <Button title="Delete" onPress={onDeleteMedication} />
    </SafeAreaView>
  );
};

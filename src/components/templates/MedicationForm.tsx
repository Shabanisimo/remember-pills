import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {StyleSheet, View} from 'react-native';

import {Counter} from '../molecules';
import {Button, Input} from '../atoms';
import {IMedicationForm} from '../../models';

type Props = {
  onSubmit: (val: IMedicationForm) => void;
};

export const MedicationForm = ({onSubmit}: Props) => {
  const {control, handleSubmit} = useForm<IMedicationForm>({
    defaultValues: {
      name: '',
      description: '',
      initialCount: 0,
      destinationCount: 0,
    },
  });

  const onAddMedication = handleSubmit(data => {
    onSubmit(data);
  });

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <Input onChangeText={onChange} onBlur={onBlur} value={value} />
        )}
        name="name"
      />
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <Input onChangeText={onChange} onBlur={onBlur} value={value} />
        )}
        name="description"
      />
      <Controller
        control={control}
        render={({field: {onChange, value}}) => (
          <Counter value={value} onChange={onChange} />
        )}
        name="initialCount"
      />
      <Controller
        control={control}
        render={({field: {onChange, value}}) => (
          <Counter value={value} onChange={onChange} />
        )}
        name="destinationCount"
      />
      <Button title="Add" onPress={onAddMedication} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
});

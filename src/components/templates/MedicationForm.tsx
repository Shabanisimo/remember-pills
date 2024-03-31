import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {StyleSheet, View} from 'react-native';

import {Counter} from '../molecules';
import {Box, Button, Input} from '../atoms';
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
    <Box paddingHorizontal="xl" bg="ternary" style={styles.container}>
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            variant="primary"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            placeholder="Name"
          />
        )}
        name="name"
      />
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            variant="primary"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            placeholder="Description"
          />
        )}
        name="description"
      />
      <Box variant="row" gap="xl">
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
      </Box>
      <Button title="Add" onPress={onAddMedication} />
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
});

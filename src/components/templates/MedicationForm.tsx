import React from 'react';
import {Controller, useForm, useWatch} from 'react-hook-form';
import {StyleSheet, Text} from 'react-native';

import {Counter} from '../molecules';
import {Box, Button, Input} from '../atoms';
import {IMedication, IMedicationForm} from '../../models';

type Props = {
  initialData?: IMedication;
  onSubmit: (val: IMedicationForm) => void;
};

export const MedicationForm = ({onSubmit, initialData}: Props) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<IMedicationForm>({
    defaultValues: {
      name: initialData?.name || '',
      description: initialData?.description || '',
      initialCount: initialData?.initialCount || 0,
      destinationCount: initialData?.destinationCount || 0,
    },
  });

  const initialCount = useWatch({control, name: 'initialCount'});
  const destinationCount = useWatch({control, name: 'destinationCount'});

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
        rules={{
          required: {
            value: true,
            message: 'Name is ruquired',
          },
        }}
        name="name"
      />
      {errors.name && <Text />}
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            variant="primary"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            placeholder="Description"
            height={100}
            multiline
          />
        )}
        name="description"
      />
      <Box variant="row" gap="xl">
        <Controller
          control={control}
          render={({field: {onChange, value}}) => (
            <Counter
              value={value}
              placeholder="Initial Count"
              onChange={onChange}
              incrementDisabled={value === destinationCount}
              editable
            />
          )}
          name="initialCount"
        />
        <Controller
          control={control}
          render={({field: {onChange, value}}) => (
            <Counter
              value={value}
              placeholder="Destination Count"
              onChange={onChange}
              decreaseDisabled={value === initialCount}
              editable
            />
          )}
          rules={{
            required: {
              value: true,
              message: 'Destination Count is ruquired',
            },
          }}
          name="destinationCount"
        />
      </Box>
      <Button
        title={initialData ? 'Update' : 'Add'}
        onPress={onAddMedication}
      />
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
});

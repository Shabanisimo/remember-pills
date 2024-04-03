import React from 'react';
import {Controller, useForm, useWatch} from 'react-hook-form';
import {StyleSheet} from 'react-native';

import {Counter} from '../molecules';
import {Box, Button, Input, Text} from '../atoms';
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
      {errors.name && <Text variant="error">{errors?.name.message}</Text>}
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            variant="multiline"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            placeholder="Description"
            multiline
          />
        )}
        name="description"
      />
      <Box>
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
              min: 1,
            }}
            name="destinationCount"
          />
        </Box>
        {errors.destinationCount && (
          <Text variant="error">Destination value should me more than 0</Text>
        )}
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

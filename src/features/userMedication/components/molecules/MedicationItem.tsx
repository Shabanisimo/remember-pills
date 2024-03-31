import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {RouteNames} from '../../../../navigation/routes';
import {ScreensParams} from '../../../../navigation/types';
import {IMedication} from '../../../../models';
import {Counter} from '../../../../components/molecules';
import {updateMedication, useAppDispatch} from '../../../../store';
import {Box, Text, TouchableOpacity} from '../../../../components/atoms';

type Props = IMedication;

export const MedicationItem = (props: Props) => {
  const {name, description, initialCount, destinationCount, isActive, id} =
    props;
  const navigation =
    useNavigation<
      NativeStackNavigationProp<ScreensParams, typeof RouteNames.UserMedication>
    >();
  const dispatch = useAppDispatch();

  const onChange = (val: number) => {
    dispatch(
      updateMedication({
        ...props,
        isActive: val < destinationCount,
        initialCount: val,
      }),
    );
  };

  return (
    <TouchableOpacity
      variant="rowSpaceBetween"
      onPress={() => {
        navigation.navigate(RouteNames.MedicationDetails, {medicationId: id});
      }}
      bg="primary"
      borderRadius={10}
      p="l">
      <Box>
        <Text variant="bold" fontSize={20}>
          {name}
        </Text>
        <Text numberOfLines={1}>{description}</Text>
      </Box>
      <Counter
        value={initialCount}
        onChange={onChange}
        incrementDisabled={!isActive}
      />
    </TouchableOpacity>
  );
};

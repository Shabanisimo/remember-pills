import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {RouteNames} from '../../../../navigation/routes';
import {ScreensParams} from '../../../../navigation/types';
import {IMedication} from '../../../../models';

type Props = IMedication;

export const MedicationItem = ({name}: Props) => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<ScreensParams, typeof RouteNames.UserMedication>
    >();

  return (
    <TouchableOpacity
      style={{height: 40, borderWidth: 1}}
      onPress={() => {
        navigation.navigate(RouteNames.MedicationDetails, {medicationId: ''});
      }}>
      <Text>{name}</Text>
    </TouchableOpacity>
  );
};

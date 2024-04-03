import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Alert, StatusBar} from 'react-native';

import {
  Box,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from '../../../../components/atoms';
import {deleteMedication, useAppDispatch} from '../../../../store';

import EditIcon from '../../../../assets/svg/edit.svg';
import RemoveIcon from '../../../../assets/svg/remove.svg';
import LeftArrowIcon from '../../../../assets/svg/left-arrow.svg';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type Props = {
  title: string;
  medicationId: string;
  onHandleEdit: () => void;
};

const HEADER_HEIGHT = 200;

export const Header = ({title, medicationId, onHandleEdit}: Props) => {
  const dispatch = useAppDispatch();
  const {goBack} = useNavigation();

  const {top} = useSafeAreaInsets();

  const onDeleteMedication = () => {
    Alert.alert(`Remove ${title}`, `Are you sure you want to delete ${title}`, [
      {
        text: 'No',
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () => {
          goBack();
          dispatch(deleteMedication(medicationId));
        },
      },
    ]);
  };

  return (
    <SafeAreaView
      bg="primary"
      justifyContent="space-between"
      height={HEADER_HEIGHT + top}
      p="xl"
      edges={['top']}>
      <StatusBar translucent backgroundColor="transparent" />
      <Box variant="rowSpaceBetween">
        <TouchableOpacity onPress={goBack}>
          <LeftArrowIcon />
        </TouchableOpacity>
        <Box variant="row" gap="l">
          <TouchableOpacity onPress={onHandleEdit}>
            <EditIcon />
          </TouchableOpacity>
          <TouchableOpacity onPress={onDeleteMedication}>
            <RemoveIcon />
          </TouchableOpacity>
        </Box>
      </Box>
      <Text variant="title" color="white">
        {title}
      </Text>
    </SafeAreaView>
  );
};

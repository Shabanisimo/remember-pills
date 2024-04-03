import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  SlideInRight,
  SlideOutRight,
  LinearTransition,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

import {RouteNames} from '../../../../navigation/routes';
import {ScreensParams} from '../../../../navigation/types';
import {IMedication} from '../../../../models';
import {Counter} from '../../../../components/molecules';
import {updateMedication, useAppDispatch} from '../../../../store';
import {Box, Text, TouchableOpacity} from '../../../../components/atoms';

type Props = {
  index: number;
} & IMedication;

const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);

const transition = LinearTransition.springify().duration(100);

export const MedicationItem = ({index = 1, ...props}: Props) => {
  const dispatch = useAppDispatch();
  const navigation =
    useNavigation<
      NativeStackNavigationProp<ScreensParams, typeof RouteNames.UserMedication>
    >();
  const {name, description, initialCount, destinationCount, isActive, id} =
    props;

  const pressed = useSharedValue(false);
  const active = useSharedValue(isActive);

  const onChange = (val: number) => {
    dispatch(
      updateMedication({
        ...props,
        isActive: val < destinationCount,
        initialCount: val,
      }),
    );
    active.value = val < destinationCount;
  };

  const tap = Gesture.Tap()
    .onBegin(() => {
      pressed.value = true;
    })
    .onFinalize(() => (pressed.value = false));

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{scale: withTiming(pressed.value ? 0.97 : 1)}],
    opacity: withSpring(active.value ? 1 : 0.7),
  }));

  useEffect(() => {
    active.value = isActive;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive]);

  return (
    <GestureDetector gesture={tap}>
      <AnimatedTouchableOpacity
        style={animatedStyles}
        variant="rowSpaceBetween"
        onPress={() => {
          navigation.navigate(RouteNames.MedicationDetails, {medicationId: id});
        }}
        bg="primary"
        borderRadius={10}
        p="l"
        gap="xl"
        entering={SlideInRight.delay(index * 50)}
        exiting={SlideOutRight}
        layout={transition}>
        <Box flex={1}>
          <Text variant="bold" fontSize={20}>
            {name}
          </Text>
          <Text numberOfLines={1}>{description}</Text>
        </Box>
        <Box variant="row">
          <Counter
            value={initialCount}
            onChange={onChange}
            incrementDisabled={!isActive}
          />
          <Text variant="bold" ml="s">
            / {destinationCount}
          </Text>
        </Box>
      </AnimatedTouchableOpacity>
    </GestureDetector>
  );
};

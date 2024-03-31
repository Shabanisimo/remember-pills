import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Box, Button, Input} from '../atoms';

type Props = {
  value: number;
  incrementDisabled?: boolean;
  onChange: (val: number) => void;
};

export const Counter = ({
  value,
  incrementDisabled = false,
  onChange,
}: Props) => {
  const [counterValue, setCounterValue] = useState(value.toString());

  const onChangeValue = (val: string) => {
    setCounterValue(val);
    const newVal = Number(val);
    onChange(newVal);
  };

  const onBlur = () => {
    if (!counterValue) {
      setCounterValue('0');
      onChange(0);
    }
  };

  const increaseValue = () => {
    setCounterValue((Number(counterValue) + 1).toString());
    onChange(value + 1);
  };

  const decreaseValue = () => {
    if (value > 0) {
      setCounterValue((Number(counterValue) - 1).toString());
      onChange(value - 1);
    }
  };

  return (
    <Box bg="white" variant="row" borderRadius={10} p="xs">
      <Button style={styles.button} onPress={decreaseValue} title="-" />
      <Input
        value={counterValue}
        onChangeText={onChangeValue}
        onBlur={onBlur}
        keyboardType="number-pad"
        borderLeftWidth={0}
        height={40}
        width={40}
        textAlign="center"
      />
      <Button
        disabled={incrementDisabled}
        style={styles.button}
        onPress={increaseValue}
        title="+"
      />
    </Box>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 35,
    height: 35,
  },
});

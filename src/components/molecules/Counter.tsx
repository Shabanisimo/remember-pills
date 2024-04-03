import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Box, Button, Input, Text} from '../atoms';

type Props = {
  value: number;
  decreaseDisabled?: boolean;
  incrementDisabled?: boolean;
  placeholder?: string;
  editable?: boolean;
  onChange: (val: number) => void;
};

export const Counter = ({
  value,
  placeholder,
  decreaseDisabled = false,
  incrementDisabled = false,
  onChange,
  editable = false,
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
    <Box width={118}>
      {!!placeholder && <Text color="black">{placeholder}</Text>}
      <Box bg="white" variant="row" borderRadius={10} p="xs">
        <Button
          disabled={value === 0 || decreaseDisabled}
          style={styles.button}
          onPress={decreaseValue}
          title="-"
        />
        <Input
          value={counterValue}
          onChangeText={onChangeValue}
          onBlur={onBlur}
          keyboardType="number-pad"
          borderLeftWidth={0}
          height={40}
          width={40}
          textAlign="center"
          editable={editable}
        />
        <Button
          disabled={incrementDisabled}
          style={styles.button}
          onPress={increaseValue}
          title="+"
        />
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 35,
    height: 35,
  },
});

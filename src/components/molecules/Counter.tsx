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
  const [counterValue, setCounterValue] = useState(value);

  const onChangeValue = (val: number) => {
    setCounterValue(val);
    onChange(val);
  };

  const onBlur = () => {
    if (!counterValue) {
      onChangeValue(0);
    }
  };

  const increaseValue = () => {
    onChangeValue(value + 1);
  };

  const decreaseValue = () => {
    if (value > 0) {
      onChangeValue(value - 1);
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
          value={counterValue?.toString()}
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

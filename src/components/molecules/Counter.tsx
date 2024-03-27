import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {Button} from '../atoms';

type Props = {
  value: number;
  incrementEnabled?: boolean;
  onChange: (val: number) => void;
};

export const Counter = ({value, incrementEnabled = true, onChange}: Props) => {
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
    <View style={styles.container}>
      <Button style={styles.button} onPress={decreaseValue} title="-" />
      <TextInput
        style={styles.inner}
        value={counterValue}
        onChangeText={onChangeValue}
        onBlur={onBlur}
        keyboardType="number-pad"
      />
      <Button style={styles.button} onPress={increaseValue} title="+" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inner: {
    borderWidth: 1,
  },
  button: {
    width: 40,
    height: 40,
  },
});

import React, {useState} from 'react';
import {Text} from 'react-native';

import {
  createMedicationNote,
  getNoteByMedicationId,
  useAppDispatch,
  useAppSelector,
} from '../../../../store';
import {Button, Input, Box} from '../../../../components/atoms';

type Props = {
  medicationId: string;
};

export const MedicationNotes = ({medicationId}: Props) => {
  const [note, setNote] = useState('');
  const dispatch = useAppDispatch();
  const medicationNotes = useAppSelector(getNoteByMedicationId(medicationId));

  const onAddNote = () => {
    if (!!note) {
      dispatch(createMedicationNote(medicationId, note));
      setNote('');
    }
  };

  return (
    <Box>
      <Input variant="primary" value={note} onChangeText={setNote} />
      <Button title="Add" onPress={onAddNote} />
      {medicationNotes.map(medicationNote => {
        return (
          <Text key={medicationNote.createdAt}>{medicationNote.text}</Text>
        );
      })}
    </Box>
  );
};

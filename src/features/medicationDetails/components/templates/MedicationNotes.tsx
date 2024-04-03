import React, {useState} from 'react';

import {
  createMedicationNote,
  getNoteByMedicationId,
  useAppDispatch,
  useAppSelector,
} from '../../../../store';
import {Input, Box, TouchableOpacity} from '../../../../components/atoms';
import {NoteItem} from '../molecules';

import PlusIcon from '../../../../assets/svg/plus.svg';

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
      <Box flex={1} variant="row" gap="s">
        <Input flex={1} variant="primary" value={note} onChangeText={setNote} />
        <TouchableOpacity
          onPress={onAddNote}
          variant="center"
          bg="primary"
          height={40}
          width={40}
          borderRadius={20}>
          <PlusIcon />
        </TouchableOpacity>
      </Box>
      {medicationNotes.map(medicationNote => (
        <NoteItem
          createdAt={medicationNote.createdAt}
          text={medicationNote.text}
        />
      ))}
    </Box>
  );
};

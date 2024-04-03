import React, {useMemo, useState} from 'react';

import {
  createMedicationNote,
  getNoteByMedicationId,
  useAppDispatch,
  useAppSelector,
} from '../../../../store';
import {Input, Box, TouchableOpacity} from '../../../../components/atoms';
import {NoteItem} from '../molecules';

import PlusIcon from '../../../../assets/svg/plus.svg';
import {sortMedicationNotesByDate} from '../../../../utils';

type Props = {
  medicationId: string;
};

export const MedicationNotes = ({medicationId}: Props) => {
  const [note, setNote] = useState('');
  const dispatch = useAppDispatch();
  const medicationNotes = useAppSelector(getNoteByMedicationId(medicationId));

  const sortedMedicationNotes = useMemo(() => {
    return sortMedicationNotesByDate(medicationNotes);
  }, [medicationNotes]);

  const onAddNote = () => {
    const trimmedNote = note.trim();
    if (!!trimmedNote) {
      dispatch(createMedicationNote(medicationId, trimmedNote));
      setNote('');
    }
  };

  return (
    <Box>
      <Box flex={1} variant="row" gap="s">
        <Input
          flex={1}
          variant="multiline"
          value={note}
          onChangeText={setNote}
          placeholder="Enter note"
          multiline
        />
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
      {sortedMedicationNotes?.map(medicationNote => (
        <NoteItem
          createdAt={medicationNote.createdAt}
          text={medicationNote.text}
          key={medicationNote.createdAt}
        />
      ))}
    </Box>
  );
};

import React, {useMemo} from 'react';
import moment from 'moment';

import {Box, Text} from '../../../../components/atoms';

type Props = {
  text: string;
  createdAt: string;
};

export const NoteItem = ({text, createdAt}: Props) => {
  const date = useMemo(() => {
    return moment(createdAt).format('DD/MM/YY H:mm');
  }, [createdAt]);

  return (
    <Box
      mt="s"
      variant="rowSpaceBetween"
      bg="primary"
      borderRadius={8}
      p="m"
      pb="xxl">
      <Text color="white">{text}</Text>
      <Text
        position="absolute"
        right={6}
        bottom={2}
        ml="xs"
        fontSize={12}
        color="white"
        opacity={0.6}>
        {date}
      </Text>
    </Box>
  );
};

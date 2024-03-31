import React, {forwardRef, useCallback} from 'react';
import {ViewStyle, StyleSheet, Dimensions} from 'react-native';

import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
  useBottomSheetSpringConfigs,
} from '@gorhom/bottom-sheet';
import type {BottomSheetDefaultBackdropProps} from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types';
import {useTheme} from '../../theme';
import {SPACING} from '../../theme/spacing';

export type BottomSheetProps = {
  children: React.ReactNode;
  style?: ViewStyle;
  onClose?: () => void;
};

export const BottomSheet = forwardRef<BottomSheetModal, BottomSheetProps>(
  (props, ref) => {
    const {children, style} = props;
    const {colors} = useTheme();

    const animationConfigs = useBottomSheetSpringConfigs({
      damping: 80,
      overshootClamping: true,
      restDisplacementThreshold: 0.1,
      restSpeedThreshold: 0.1,
      stiffness: 300,
    });

    const onDismiss = () => {
      // @ts-ignore
      ref?.current?.dismiss();
    };

    const renderBackdrop = useCallback(
      (backdropProps: BottomSheetDefaultBackdropProps) => (
        <BottomSheetBackdrop
          {...backdropProps}
          style={styles.backdropStyle}
          disappearsOnIndex={-1}
          appearsOnIndex={0}
        />
      ),
      [],
    );
    return (
      <BottomSheetModalProvider>
        <BottomSheetModal
          ref={ref}
          enableDynamicSizing
          enableDismissOnClose
          onDismiss={onDismiss}
          style={[styles.container, style, {backgroundColor: colors.ternary}]}
          backgroundComponent={null}
          handleIndicatorStyle={styles.handleStyle}
          backdropComponent={renderBackdrop}
          animationConfigs={animationConfigs}>
          <BottomSheetView style={styles.contentContainerStyle}>
            {children}
          </BottomSheetView>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: SPACING.s,
    borderTopRightRadius: SPACING.s,
  },
  handleStyle: {
    opacity: 0,
    height: 0,
    padding: 0,
  },
  contentContainerStyle: {
    paddingBottom: 30,
  },
  backdropStyle: {
    position: 'absolute',
    top: -100,
    right: 0,
    left: 0,
    width: Dimensions.get('window').width,
    height: '100%',
  },
});

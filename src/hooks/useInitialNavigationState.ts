import React, {useEffect} from 'react';
import {Linking} from 'react-native';
import {storage} from '../utils';
import {NavigationState} from '@react-navigation/native';

const NAVIGATION_STATE = 'NAVIGATION_STATE';

export const useInitialNavigationState = () => {
  const [isReady, setIsReady] = React.useState(false);
  const [initialState, setInitialState] = React.useState();

  const onStateChange = (state?: NavigationState) => {
    if (state) {
      storage.set(
        NAVIGATION_STATE,
        JSON.stringify(state.routes[state.routes.length - 1].name),
      );
    }
  };

  useEffect(() => {
    const restoreState = async () => {
      try {
        const initialUrl = await Linking.getInitialURL();
        if (initialUrl == null) {
          const savedStateString = storage.getString(NAVIGATION_STATE);
          const state = savedStateString
            ? JSON.parse(savedStateString)
            : undefined;

          if (state !== undefined) {
            setInitialState(state);
          }
        }
      } finally {
        setIsReady(true);
      }
    };

    if (!isReady) {
      restoreState();
    }
  }, [isReady]);

  return {
    isReady,
    initialState,
    onStateChange,
  };
};

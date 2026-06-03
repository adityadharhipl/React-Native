import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import AppStack from './AppStack';
import AuthStack from './AuthStack';
import OnboardingStack from './OnboardingStack';
import BootScreen from '../screens/BootScreen';
import { setAuthHydrated, signIn } from '../store/slices/authSlice';
import {
  completeOnboarding,
  setHydrated,
  setPreferredLanguage,
} from '../store/slices/appSlice';
import { safeGetItem } from '../store/persistentStorage';
import { storageKeys } from '../store/storage';

export default function RootNavigator() {
  const dispatch = useDispatch();
  const appHydrated = useSelector(state => state.app.hydrated);
  const authHydrated = useSelector(state => state.auth.hydrated);
  const onboardingComplete = useSelector(state => state.app.onboardingComplete);
  const isSignedIn = useSelector(state => state.auth.isSignedIn);

  useEffect(() => {
    let mounted = true;

    async function hydrate() {
      try {
        const [onboardingValue, languageValue, userValue] = await Promise.all([
          safeGetItem(storageKeys.onboardingComplete),
          safeGetItem(storageKeys.preferredLanguage),
          safeGetItem(storageKeys.authUser),
        ]);

        if (!mounted) {
          return;
        }

        if (onboardingValue === 'true') {
          dispatch(completeOnboarding());
        }

        if (languageValue) {
          dispatch(setPreferredLanguage(languageValue));
        }

        if (userValue) {
          dispatch(signIn(JSON.parse(userValue)));
        }
      } catch (error) {
        console.warn('Failed to hydrate app state', error);
      } finally {
        if (mounted) {
          dispatch(setHydrated(true));
          dispatch(setAuthHydrated(true));
        }
      }
    }

    hydrate();

    return () => {
      mounted = false;
    };
  }, [dispatch]);

  if (!appHydrated || !authHydrated) {
    return <BootScreen />;
  }

  return (
    <NavigationContainer>
      {onboardingComplete ? (
        isSignedIn ? (
          <AppStack />
        ) : (
          <AuthStack />
        )
      ) : (
        <OnboardingStack />
      )}
    </NavigationContainer>
  );
}

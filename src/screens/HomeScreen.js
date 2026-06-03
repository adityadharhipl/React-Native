import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pressable, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';

import { colors } from '../theme/colors';
import { safeRemoveItem } from '../store/persistentStorage';
import { signOut } from '../store/slices/authSlice';
import { storageKeys } from '../store/storage';

export default function HomeScreen() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  const handleLogout = async () => {
    dispatch(signOut());
    await safeRemoveItem(storageKeys.authUser);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />
      <View style={styles.content}>
        <Text style={styles.brand}>Solfana</Text>
        <Text style={styles.title}>You are signed in</Text>
        <Text style={styles.subtitle}>{user?.email || 'Welcome back'}</Text>

        <Pressable onPress={handleLogout} style={styles.primaryButton}>
          <Text style={styles.primaryText}>Logout</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { flex: 1, paddingHorizontal: 24, justifyContent: 'center' },
  brand: { color: colors.primary, fontSize: 18, fontWeight: '700', marginBottom: 10 },
  title: { color: colors.white, fontSize: 32, fontWeight: '800' },
  subtitle: { color: colors.textGray, marginTop: 8, marginBottom: 24, lineHeight: 20 },
  primaryButton: {
    backgroundColor: colors.primary,
    height: 52,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  primaryText: { color: colors.white, fontWeight: '700', fontSize: 16 },
});

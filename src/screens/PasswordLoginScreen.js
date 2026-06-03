import React, { useState } from 'react';
import {
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useDispatch } from 'react-redux';

import { colors } from '../theme/colors';
import { safeSetItem } from '../store/persistentStorage';
import { signIn } from '../store/slices/authSlice';
import { storageKeys } from '../store/storage';

export default function PasswordLoginScreen({ navigation }) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const user = { email: email.trim(), name: email.trim().split('@')[0] || 'User' };
    dispatch(signIn(user));
    await safeSetItem(storageKeys.authUser, JSON.stringify(user));
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />
      <View style={styles.topBar}>
        <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backText}>{'<'}</Text>
        </Pressable>
        <Text style={styles.brand}>Solfana</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>
          Welcome back to{'\n'}<Text style={styles.accent}>Solfana!</Text>
        </Text>

        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="email@gmail.com"
          placeholderTextColor="#7f7f8d"
          style={styles.input}
          autoCapitalize="none"
        />
        <View style={styles.passwordWrap}>
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Enter password"
            placeholderTextColor="#7f7f8d"
            style={styles.input}
            secureTextEntry
          />
        </View>

        <View style={styles.rowLinks}>
          <Text style={styles.helper}>Forgot password?</Text>
          <Pressable onPress={() => navigation.navigate('ResetPassword')}>
            <Text style={styles.link}>Forgot Password?</Text>
          </Pressable>
        </View>

        <Pressable
          onPress={handleLogin}
          style={({ pressed }) => [styles.primaryButton, pressed && styles.buttonPressed]}
        >
          <Text style={styles.primaryText}>Login</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, paddingHorizontal: 18 },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 8,
    marginBottom: 24,
  },
  backButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.14)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  backText: { color: colors.white, fontSize: 18, marginTop: -2 },
  brand: { color: colors.primary, fontSize: 16, fontWeight: '800' },
  content: { flex: 1, justifyContent: 'center' },
  title: { color: colors.white, fontSize: 28, fontWeight: '800', marginBottom: 22 },
  accent: { color: colors.primary },
  input: {
    height: 52,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#232332',
    backgroundColor: colors.cardBg,
    color: colors.white,
    paddingHorizontal: 16,
    marginBottom: 14,
  },
  passwordWrap: {
    position: 'relative',
  },
  rowLinks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  helper: { color: colors.textGray, fontSize: 12 },
  link: { color: colors.primary, fontSize: 12, fontWeight: '700' },
  primaryButton: {
    height: 48,
    borderRadius: 24,
    backgroundColor: '#ef49d8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryText: { color: colors.white, fontWeight: '700', fontSize: 15 },
  buttonPressed: { opacity: 0.92 },
});

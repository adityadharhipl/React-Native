import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { colors } from '../theme/colors';
import { safeSetItem } from '../store/persistentStorage';
import { signUp } from '../store/slices/authSlice';
import { storageKeys } from '../store/storage';

export default function SignupScreen({ navigation }) {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    const user = { name: name.trim() || 'User', email: email.trim() };
    dispatch(signUp(user));
    await safeSetItem(storageKeys.authUser, JSON.stringify(user));
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />
      <View style={styles.content}>
        <Text style={styles.brand}>Solfana</Text>
        <Text style={styles.title}>Create account</Text>
        <Text style={styles.subtitle}>Join now and save your listening preferences.</Text>

        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Full name"
          placeholderTextColor="#7f7f8d"
          style={styles.input}
        />
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          placeholderTextColor="#7f7f8d"
          style={styles.input}
          autoCapitalize="none"
        />
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          placeholderTextColor="#7f7f8d"
          style={styles.input}
          secureTextEntry
        />

        <Pressable onPress={handleSignup} style={styles.primaryButton}>
          <Text style={styles.primaryText}>Sign up</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('LoginLanding')} style={styles.linkButton}>
          <Text style={styles.linkText}>Already have an account? Login</Text>
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
  input: {
    backgroundColor: colors.cardBg,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#232332',
    color: colors.white,
    paddingHorizontal: 16,
    height: 52,
    marginBottom: 14,
  },
  primaryButton: {
    backgroundColor: colors.primary,
    height: 52,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  primaryText: { color: colors.white, fontWeight: '700', fontSize: 16 },
  linkButton: { alignItems: 'center', paddingTop: 16 },
  linkText: { color: colors.textGray, fontSize: 14 },
});

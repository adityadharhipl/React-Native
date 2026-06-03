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

import { colors } from '../theme/colors';

export default function ResetPasswordScreen({ navigation }) {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

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
          Create a new{'\n'}<Text style={styles.accent}>password</Text>
        </Text>
        <Text style={styles.subtitle}>Set a password for your Solfana account.</Text>

        <TextInput
          value={newPassword}
          onChangeText={setNewPassword}
          placeholder="Enter new password"
          placeholderTextColor="#7f7f8d"
          secureTextEntry
          style={styles.input}
        />
        <TextInput
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholder="Confirm password"
          placeholderTextColor="#7f7f8d"
          secureTextEntry
          style={styles.input}
        />

        <View style={styles.rules}>
          <Text style={styles.rulesTitle}>Your password must contain</Text>
          <Text style={styles.rule}>• Minimum 8 characters</Text>
          <Text style={styles.rule}>• At least 1 uppercase letter</Text>
          <Text style={styles.rule}>• At least 1 lowercase letter</Text>
          <Text style={styles.rule}>• At least 1 special character</Text>
          <Text style={styles.rule}>• At least 1 number</Text>
        </View>

        <Pressable
          onPress={() => navigation.navigate('PasswordChanged')}
          style={({ pressed }) => [styles.primaryButton, pressed && styles.buttonPressed]}
        >
          <Text style={styles.primaryText}>Reset Password</Text>
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
  title: { color: colors.white, fontSize: 28, fontWeight: '800', lineHeight: 34 },
  accent: { color: colors.primary },
  subtitle: { color: colors.textGray, marginTop: 10, marginBottom: 20 },
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
  rules: {
    marginTop: 4,
    marginBottom: 22,
  },
  rulesTitle: { color: colors.white, fontSize: 12, fontWeight: '700', marginBottom: 8 },
  rule: { color: colors.textGray, fontSize: 12, marginBottom: 4 },
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

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

export default function OtpScreen({ navigation }) {
  const [otp, setOtp] = useState('');

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
        <Text style={styles.title}>Enter OTP</Text>
        <Text style={styles.subtitle}>We sent a 4-digit code to your email address.</Text>

        <View style={styles.otpRow}>
          {Array.from({ length: 4 }).map((_, index) => (
            <View key={index} style={styles.otpBox}>
              <Text style={styles.otpDigit}>{otp[index] || ''}</Text>
            </View>
          ))}
        </View>

        <TextInput
          value={otp}
          onChangeText={text => setOtp(text.replace(/[^0-9]/g, '').slice(0, 4))}
          keyboardType="number-pad"
          maxLength={4}
          style={styles.hiddenInput}
        />

        <View style={styles.rowLinks}>
          <Text style={styles.helper}>Didn't receive a code?</Text>
          <Pressable>
            <Text style={styles.link}>Resend Code</Text>
          </Pressable>
        </View>

        <Pressable
          onPress={() => navigation.navigate('PasswordLogin')}
          style={({ pressed }) => [styles.primaryButton, pressed && styles.buttonPressed]}
        >
          <Text style={styles.primaryText}>Verify</Text>
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
  title: { color: colors.white, fontSize: 28, fontWeight: '800' },
  subtitle: { color: colors.textGray, marginTop: 10, marginBottom: 22, lineHeight: 20 },
  otpRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 },
  otpBox: {
    width: 48,
    height: 54,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#232332',
    backgroundColor: colors.cardBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  otpDigit: { color: colors.white, fontSize: 18, fontWeight: '700' },
  hiddenInput: {
    position: 'absolute',
    opacity: 0,
    width: 1,
    height: 1,
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

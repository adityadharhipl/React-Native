import React from 'react';
import {
  ImageBackground,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { colors } from '../theme/colors';
import { completeOnboarding } from '../store/slices/appSlice';

function HeaderMark() {
  return <Text style={styles.brandMark}>Solfana</Text>;
}

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />
      <ImageBackground
        source={{
          uri: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
        }}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.overlay} />
        <SafeAreaView style={styles.safe}>
          <View style={styles.topBar}>
            <HeaderMark />
          </View>

          <View style={styles.panel}>
            <Text style={styles.title}>
              Welcome back to{'\n'}<Text style={styles.accent}>Solfana!</Text>
            </Text>
            <Text style={styles.subtitle}>Enter your login details to continue</Text>

            <Pressable
              onPress={() => navigation.navigate('Otp')}
              style={({ pressed }) => [styles.primaryButton, pressed && styles.buttonPressed]}
            >
              <Text style={styles.primaryText}>Continue with OTP</Text>
            </Pressable>

            <View style={styles.dividerRow}>
              <View style={styles.divider} />
              <Text style={styles.dividerText}>or</Text>
              <View style={styles.divider} />
            </View>

            <Pressable
              onPress={() => navigation.navigate('PasswordLogin')}
              style={({ pressed }) => [styles.secondaryButton, pressed && styles.buttonPressed]}
            >
              <Text style={styles.secondaryText}>Login with Password</Text>
            </Pressable>
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Not a member?</Text>
            <Pressable onPress={() => navigation.navigate('Signup')}>
              <Text style={styles.footerLink}>Register Now</Text>
            </Pressable>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  background: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.72)',
  },
  safe: {
    flex: 1,
    paddingHorizontal: 18,
    justifyContent: 'space-between',
  },
  topBar: {
    paddingTop: 6,
    alignItems: 'center',
  },
  brandMark: {
    color: colors.primary,
    fontSize: 17,
    fontWeight: '800',
    letterSpacing: 0.4,
  },
  panel: {
    marginTop: 'auto',
    marginBottom: 18,
    paddingHorizontal: 2,
  },
  title: {
    color: colors.white,
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '800',
  },
  accent: {
    color: colors.primary,
  },
  subtitle: {
    color: colors.textGray,
    marginTop: 10,
    marginBottom: 18,
    fontSize: 14,
  },
  primaryButton: {
    height: 48,
    borderRadius: 24,
    backgroundColor: '#ef49d8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryText: {
    color: colors.white,
    fontWeight: '700',
    fontSize: 15,
  },
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 14,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.12)',
  },
  dividerText: {
    color: colors.textGray,
    marginHorizontal: 10,
    fontSize: 12,
  },
  secondaryButton: {
    height: 46,
    borderRadius: 23,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.14)',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.35)',
  },
  secondaryText: {
    color: colors.white,
    fontWeight: '600',
    fontSize: 14,
  },
  buttonPressed: {
    opacity: 0.92,
  },
  footer: {
    alignItems: 'center',
    paddingBottom: 18,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footerText: {
    color: colors.textGray,
    fontSize: 13,
    marginRight: 6,
  },
  footerLink: {
    color: colors.primary,
    fontSize: 13,
    fontWeight: '700',
  },
});

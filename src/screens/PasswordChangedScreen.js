import React from 'react';
import { Pressable, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';

import { colors } from '../theme/colors';

export default function PasswordChangedScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />
      <View style={styles.center}>
        <View style={styles.card}>
          <Text style={styles.icon}>OK</Text>
          <Text style={styles.title}>Password Changed Successfully</Text>
          <Text style={styles.subtitle}>
            Your password was changed successfully. Log in now to explore Solfana.
          </Text>
          <Pressable
            onPress={() => navigation.navigate('LoginLanding')}
            style={({ pressed }) => [styles.primaryButton, pressed && styles.buttonPressed]}
          >
            <Text style={styles.primaryText}>Go To Login</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 24 },
  card: {
    width: '100%',
    maxWidth: 320,
    backgroundColor: '#120715',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
    padding: 22,
    alignItems: 'center',
  },
  icon: {
    width: 64,
    height: 64,
    borderRadius: 999,
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: '#21d36d',
    color: colors.white,
    fontSize: 24,
    fontWeight: '900',
    marginBottom: 18,
  },
  title: {
    color: colors.white,
    fontSize: 24,
    fontWeight: '800',
    textAlign: 'center',
  },
  subtitle: {
    marginTop: 12,
    marginBottom: 18,
    color: colors.textGray,
    textAlign: 'center',
    lineHeight: 20,
  },
  primaryButton: {
    width: '100%',
    height: 48,
    borderRadius: 24,
    backgroundColor: '#ef49d8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryText: { color: colors.white, fontWeight: '700', fontSize: 15 },
  buttonPressed: { opacity: 0.92 },
});

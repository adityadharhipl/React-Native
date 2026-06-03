import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';

import { colors } from '../theme/colors';

export default function BootScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />
      <View style={styles.center}>
        <View style={styles.mark}>
          <View style={styles.barTall} />
          <View style={styles.barMid} />
          <View style={styles.barShort} />
        </View>
        <Text style={styles.title}>Solfana</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mark: {
    width: 58,
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  barTall: {
    position: 'absolute',
    left: 26,
    width: 6,
    height: 28,
    borderRadius: 999,
    backgroundColor: colors.primary,
  },
  barMid: {
    position: 'absolute',
    left: 18,
    width: 6,
    height: 20,
    borderRadius: 999,
    backgroundColor: colors.primary,
  },
  barShort: {
    position: 'absolute',
    left: 34,
    width: 6,
    height: 16,
    borderRadius: 999,
    backgroundColor: colors.primary,
  },
  title: {
    color: colors.primary,
    fontSize: 26,
    fontWeight: '800',
  },
});

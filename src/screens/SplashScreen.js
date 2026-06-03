import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';

function BrandMark() {
  return (
    <View style={styles.markWrap}>
      <View style={[styles.bar, styles.barTall]} />
      <View style={[styles.bar, styles.barMedium]} />
      <View style={[styles.bar, styles.barShort]} />
      <View style={[styles.bar, styles.barMedium]} />
      <View style={[styles.dot, styles.dotLeft]} />
      <View style={[styles.dot, styles.dotRight]} />
    </View>
  );
}
export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Language');
    }, 1800);

    return () => clearTimeout(timer);
  }, [navigation]);
  
  console.log(navigation ,"navoigation")
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#050505" />
      <View style={styles.center}>
        <BrandMark />
        <Text style={styles.title}>Solfana</Text>
        <Text style={styles.tagline}>Ecoute, apprends, partage</Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050505',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  markWrap: {
    width: 72,
    height: 88,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bar: {
    position: 'absolute',
    width: 7,
    borderRadius: 999,
    backgroundColor: '#d53efc',
  },
  barTall: {
    height: 48,
    left: 24,
  },
  barMedium: {
    height: 34,
    top: 10,
  },
  barShort: {
    height: 24,
    right: 24,
    top: 14,
  },
  dot: {
    position: 'absolute',
    width: 6,
    height: 6,
    borderRadius: 999,
    backgroundColor: '#d53efc',
    bottom: 14,
  },
  dotLeft: {
    left: 14,
  },
  dotRight: {
    right: 14,
  },
  title: {
    color: '#df44ff',
    fontSize: 44,
    lineHeight: 50,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  tagline: {
    marginTop: 10,
    color: '#a5a5a5',
    fontSize: 14,
    fontStyle: 'italic',
  },
});

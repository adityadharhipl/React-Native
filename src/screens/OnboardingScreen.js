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
const bgImage = require('../assets/image/img1.png');
const bgImage1 = require('../assets/image/button.png');
export default function OnboardingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#050505" />
       <ImageBackground
        source={bgImage}
        resizeMode="cover"
        style={styles.background}
      >
        <View style={styles.overlayTop} />
        <View style={styles.overlayBottom} />

        <SafeAreaView style={styles.safe}>
          <View style={styles.content}>
            <View style={styles.badge} />

            <Text style={styles.title}>
              Un monde{'\n'}d'histoires et de{'\n'}savoirs
            </Text>

            <Text style={styles.subtitle}>
              Écoutez des contenus qui inspirent et nourrissent l'esprit.
            </Text>
          </View>

          <View style={styles.footer}>
            <View style={styles.dots}>
              <View style={[styles.dot, styles.dotActive]} />
              <View style={styles.dot} />
              <View style={styles.dot} />
            </View>

            <Pressable
              onPress={() => navigation.navigate('OnboardingExplore')}
              style={({ pressed }) => [styles.nextButton, pressed && styles.nextPressed]}
            >
              <Text style={styles.nextText}>→</Text>
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
    backgroundColor: '#050505',
  },
  background: {
    flex: 1,
  },
  overlayTop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.18)',
  },
  overlayBottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '52%',
    backgroundColor: 'rgba(0,0,0,0.66)',
  },
  safe: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 18,
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 18,
  },
  badge: {
    position: 'absolute',
    top: 14,
    right: 0,
    width: 130,
    height: 130,
    borderRadius: 999,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.15)',
    backgroundColor: 'rgba(20,145,255,0.08)',
    shadowColor: '#00d5ff',
    shadowOpacity: 0.35,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 0 },
  },
  title: {
    color: '#fff',
    fontSize: 26,
    lineHeight: 30,
    fontWeight: '800',
    maxWidth: 250,
  },
  subtitle: {
    marginTop: 12,
    color: 'rgba(255,255,255,0.78)',
    fontSize: 13,
    lineHeight: 19,
    maxWidth: 270,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 2,
  },
  dots: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 999,
    backgroundColor: 'rgba(255,255,255,0.35)',
    marginRight: 6,
  },
  dotActive: {
    width: 14,
    backgroundColor: '#df41f7',
  },
  nextButton: {
    width: 38,
    height: 38,
    borderRadius: 999,
    backgroundColor: '#df41f7',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#df41f7',
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 16,
    elevation: 8,
  },
  nextPressed: {
    opacity: 0.92,
  },
  nextText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '400',
    marginTop: -6,
  },
});

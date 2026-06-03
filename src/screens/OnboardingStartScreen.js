import React from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useDispatch } from 'react-redux';

import { completeOnboarding } from '../store/slices/appSlice';
import { safeSetItem } from '../store/persistentStorage';
import { storageKeys } from '../store/storage';

const circles = [
  'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=400&q=80',
];

function CircleAvatar({ uri, size = 74, offsetStyle }) {
  return (
    <View style={[styles.circleWrap, offsetStyle]}>
      <Image source={{ uri }} style={[styles.circleImage, { width: size, height: size, borderRadius: size / 2 }]} />
    </View>
  );
}

export default function OnboardingStartScreen() {
  const dispatch = useDispatch();

  const handleContinue = async () => {
    dispatch(completeOnboarding());
    await safeSetItem(storageKeys.onboardingComplete, 'true');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#07020d" />
      <View style={styles.background}>
        <View style={styles.blurGlowTop} />
        <View style={styles.blurGlowLeft} />
        <SafeAreaView style={styles.safe}>
          <View style={styles.avatarCluster}>
            <CircleAvatar uri={circles[0]} size={78} offsetStyle={styles.posA} />
            <CircleAvatar uri={circles[1]} size={72} offsetStyle={styles.posB} />
            <CircleAvatar uri={circles[2]} size={82} offsetStyle={styles.posC} />
            <CircleAvatar uri={circles[3]} size={70} offsetStyle={styles.posD} />
            <CircleAvatar uri={circles[4]} size={68} offsetStyle={styles.posE} />
            <CircleAvatar uri={circles[5]} size={76} offsetStyle={styles.posF} />
            <View style={styles.centerLogo}>
              <Text style={styles.centerLogoText}>H</Text>
            </View>
          </View>

          <View style={styles.content}>
            <Text style={styles.brand}>Solfana</Text>
            <Text style={styles.title}>Commencez votre voyage audio</Text>

            <Pressable
              onPress={handleContinue}
              style={({ pressed }) => [styles.emailButton, pressed && styles.emailPressed]}
            >
              <Text style={styles.emailIcon}>✉</Text>
              <Text style={styles.emailText}>Continue with email</Text>
            </Pressable>
          </View>

          <View style={styles.homeIndicator} />
        </SafeAreaView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#07020d',
  },
  background: {
    flex: 1,
    backgroundColor: '#07020d',
  },
  blurGlowTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 220,
    backgroundColor: 'rgba(191, 47, 255, 0.18)',
  },
  blurGlowLeft: {
    position: 'absolute',
    left: -120,
    top: 100,
    width: 260,
    height: 260,
    borderRadius: 999,
    backgroundColor: 'rgba(255, 0, 136, 0.10)',
  },
  safe: {
    flex: 1,
    paddingHorizontal: 18,
    paddingTop: 16,
    paddingBottom: 14,
    justifyContent: 'space-between',
  },
  avatarCluster: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleWrap: {
    position: 'absolute',
    borderRadius: 999,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.35)',
    overflow: 'hidden',
    backgroundColor: '#22081d',
  },
  circleImage: {
    opacity: 0.92,
  },
  posA: { top: 16, left: 14 },
  posB: { top: 14, right: 14 },
  posC: { top: 88, left: 92 },
  posD: { bottom: 136, left: 0 },
  posE: { bottom: 96, right: 14 },
  posF: { bottom: 74, left: 42 },
  centerLogo: {
    width: 58,
    height: 58,
    borderRadius: 999,
    backgroundColor: '#19a34a',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: 'rgba(255,255,255,0.9)',
  },
  centerLogoText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '900',
    marginTop: -2,
  },
  content: {
    paddingBottom: 8,
  },
  brand: {
    color: '#e347ff',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 8,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    lineHeight: 33,
    fontWeight: '800',
    maxWidth: 290,
    marginBottom: 16,
  },
  emailButton: {
    minHeight: 42,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.12)',
    backgroundColor: 'rgba(0,0,0,0.45)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  emailPressed: {
    opacity: 0.92,
  },
  emailIcon: {
    color: '#fff',
    fontSize: 12,
    marginTop: -1,
  },
  emailText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
  },
  homeIndicator: {
    alignSelf: 'center',
    width: 134,
    height: 4,
    borderRadius: 999,
    backgroundColor: 'rgba(255,255,255,0.45)',
    marginBottom: 4,
  },
});

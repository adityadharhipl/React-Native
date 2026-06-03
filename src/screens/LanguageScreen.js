import React, { useState } from 'react';
import {
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { setPreferredLanguage } from '../store/slices/appSlice';
import { safeSetItem } from '../store/persistentStorage';
import { storageKeys } from '../store/storage';

function BrandWatermark() {
  return (
    <View style={styles.watermark}>
      <Text style={styles.watermarkMark}>Solfana</Text>
    </View>
  );
}

function LanguageOption({ active, flag, label, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.option,
        active && styles.optionActive,
        pressed && styles.optionPressed,
      ]}
    >
      <View style={styles.optionLeft}>
        <Text style={styles.flag}>{flag}</Text>
        <Text style={styles.optionLabel}>{label}</Text>
      </View>
      <View style={[styles.radio, active && styles.radioActive]}>
        {active ? <View style={styles.radioDot} /> : null}
      </View>
    </Pressable>
  );
}

export default function LanguageScreen({ navigation }) {
  const dispatch = useDispatch();
  const preferredLanguage = useSelector(state => state.app.preferredLanguage);
  const [selected, setSelected] = useState(preferredLanguage === 'fr' ? 'fr' : 'en');

  const handleLanguageSelect = async language => {
    setSelected(language);
    dispatch(setPreferredLanguage(language));
    await safeSetItem(storageKeys.preferredLanguage, language);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#05060a" />
      <View style={styles.center}>
        <BrandWatermark />

        <View style={styles.card}>
          <Text style={styles.heading}>Choose Language</Text>

          <LanguageOption
            active={selected === 'fr'}
            flag="🇫🇷"
            label="French"
            onPress={() => handleLanguageSelect('fr')}
          />

          <LanguageOption
            active={selected === 'en'}
            flag="🇺🇸"
            label="English"
            onPress={() => handleLanguageSelect('en')}
          />

          <Pressable
            onPress={() => navigation.navigate('Onboarding')}
            style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
          >
            <Text style={styles.buttonText}>Continue</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#05060a',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  watermark: {
    position: 'absolute',
    opacity: 0.08,
    top: '42%',
    transform: [{ translateY: -42 }],
  },
  watermarkMark: {
    fontSize: 56,
    fontWeight: '800',
    letterSpacing: 0.4,
    color: '#8f63ff',
  },
  card: {
    width: '100%',
    maxWidth: 330,
    borderRadius: 28,
    backgroundColor: '#101320',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
    paddingHorizontal: 18,
    paddingTop: 18,
    paddingBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 18 },
    shadowRadius: 32,
    elevation: 10,
  },
  heading: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 16,
  },
  option: {
    minHeight: 42,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
    backgroundColor: 'rgba(255,255,255,0.03)',
    paddingHorizontal: 14,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  optionActive: {
    backgroundColor: '#ece3ff',
    borderColor: '#d7c1ff',
  },
  optionPressed: {
    opacity: 0.9,
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flag: {
    fontSize: 16,
    marginRight: 10,
  },
  optionLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#f0f0f0',
  },
  radio: {
    width: 16,
    height: 16,
    borderRadius: 999,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.18)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioActive: {
    borderColor: '#d03af7',
  },
  radioDot: {
    width: 8,
    height: 8,
    borderRadius: 999,
    backgroundColor: '#d03af7',
  },
  button: {
    marginTop: 8,
    borderRadius: 18,
    minHeight: 42,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#b51cff',
    shadowColor: '#b51cff',
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 18,
    elevation: 6,
  },
  buttonPressed: {
    opacity: 0.92,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
  },
});

import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { interests } from '../data/interests';

export default function InterestCategoryScreen({ navigation }) {
  const [selected, setSelected] = useState([
    'Développement personnel',
  ]);

  const toggleInterest = item => {
    if (selected.includes(item)) {
      setSelected(selected.filter(i => i !== item));
    } else {
      setSelected([...selected, item]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Back Button */}

      <Pressable
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backText}>‹</Text>
      </Pressable>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Title */}

        <Text style={styles.title}>
          Choose your
        </Text>

        <Text style={styles.titlePink}>
          Interests
        </Text>

        {/* Chips */}

        <View style={styles.chipsContainer}>
          {interests.map(item => {
            const active = selected.includes(item);

            return (
              <Pressable
                key={item}
                onPress={() => toggleInterest(item)}
                style={[
                  styles.chip,
                  active && styles.activeChip,
                ]}
              >
                <Text
                  style={[
                    styles.chipText,
                    active && styles.activeChipText,
                  ]}
                >
                  {active ? '✓ ' : ''}
                  {item}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </ScrollView>

      {/* Bottom Button */}

      <View style={styles.footer}>
        <LinearGradient
          colors={['#A933FF', '#FF4FC7']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.doneButton}
        >
          <Pressable
            style={styles.donePressable}
            onPress={() => console.log(selected)}
          >
            <Text style={styles.doneText}>
              Done
            </Text>
          </Pressable>
        </LinearGradient>

        <Pressable>
          <Text style={styles.skipText}>
            Skip
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },

  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 90,
    paddingBottom: 120,
  },

  backButton: {
    position: 'absolute',
    top: 55,
    left: 20,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#1B1824',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },

  backText: {
    color: '#fff',
    fontSize: 22,
  },

  title: {
    color: '#fff',
    fontSize: 38,
    fontWeight: '700',
  },

  titlePink: {
    color: '#FF4FC7',
    fontSize: 38,
    fontWeight: '700',
    marginBottom: 25,
  },

  chipsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  chip: {
    borderWidth: 1,
    borderColor: '#2E2E2E',
    borderRadius: 30,
    paddingHorizontal: 14,
    paddingVertical: 10,
    marginRight: 10,
    marginBottom: 12,
  },

  activeChip: {
    backgroundColor: '#FF4FC7',
    borderColor: '#FF4FC7',

    shadowColor: '#FF4FC7',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.7,
    shadowRadius: 12,

    elevation: 8,
  },

  chipText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '500',
  },

  activeChipText: {
    color: '#fff',
    fontWeight: '700',
  },

  footer: {
    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 30,
  },

  doneButton: {
    height: 56,
    borderRadius: 30,
    overflow: 'hidden',
  },

  donePressable: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  doneText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },

  skipText: {
    textAlign: 'center',
    color: '#FF4FC7',
    marginTop: 16,
    fontWeight: '600',
  },
});
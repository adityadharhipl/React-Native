import React from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const cards = [
  {
    title: 'Education',
    image:
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Business',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'History',
    image:
      'https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Religion et spiritualité',
    image:
      'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Serie audio',
    image:
      'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: "Santé et bien-être",
    image:
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80',
  },
];

function TopicCard({ title, image, small }) {
  return (
    <View style={[styles.topicCard, small && styles.topicCardSmall]}>
      <Image source={{ uri: image }} style={styles.topicImage} />
      <View style={styles.topicShade} />
      <Text style={styles.topicText}>{title}</Text>
    </View>
  );
}

export default function OnboardingExploreScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#050505" />
      <ImageBackground
        source={{
          uri: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80',
        }}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.overlay} />
        <View style={styles.purpleGlow} />
        <SafeAreaView style={styles.safe}>
          <View style={styles.gridWrap}>
            <View style={styles.gridTop}>
              <TopicCard
                title={cards[0].title}
                image={cards[0].image}
                small
              />
              <TopicCard title={cards[1].title} image={cards[1].image} small />
              <TopicCard title={cards[2].title} image={cards[2].image} small />
            </View>

            <View style={styles.gridBottom}>
              <TopicCard title={cards[3].title} image={cards[3].image} small />
              <TopicCard title={cards[4].title} image={cards[4].image} small />
              <TopicCard title={cards[5].title} image={cards[5].image} small />
            </View>
          </View>

          <View style={styles.bottomContent}>
            <View>
              <Text style={styles.title}>Explorez par univers</Text>
              <Text style={styles.subtitle}>
                Des playlists éditoriales et des podcasteurs mis en avant, sélectionnés
                pour vous accompagner à chaque moment.
              </Text>
            </View>

            <View style={styles.footer}>
              <View style={styles.dots}>
                <View style={styles.dot} />
                <View style={[styles.dot, styles.dotActive]} />
                <View style={styles.dot} />
              </View>

              <Pressable
                onPress={() => navigation.navigate('OnboardingStart')}
                style={({ pressed }) => [styles.nextButton, pressed && styles.nextPressed]}
              >
                <Text style={styles.nextText}>→</Text>
              </Pressable>
            </View>
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
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.45)',
  },
  purpleGlow: {
    position: 'absolute',
    top: -80,
    left: -40,
    width: 220,
    height: 220,
    borderRadius: 999,
    backgroundColor: 'rgba(184, 0, 255, 0.28)',
    opacity: 0.95,
  },
  safe: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingBottom: 18,
  },
  gridWrap: {
    marginTop: 22,
    gap: 10,
  },
  gridTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  gridBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  topicCard: {
    flex: 1,
    aspectRatio: 0.78,
    borderRadius: 18,
    overflow: 'hidden',
    backgroundColor: '#1a1021',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
  },
  topicCardSmall: {
    height: 118,
  },
  topicImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  topicShade: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.38)',
  },
  topicText: {
    position: 'absolute',
    left: 10,
    right: 10,
    bottom: 10,
    color: '#fff',
    fontSize: 12,
    fontWeight: '700',
  },
  bottomContent: {
    paddingBottom: 2,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    lineHeight: 32,
    fontWeight: '800',
    marginBottom: 10,
    maxWidth: 260,
  },
  subtitle: {
    color: 'rgba(255,255,255,0.72)',
    fontSize: 13,
    lineHeight: 19,
    maxWidth: 300,
  },
  footer: {
    marginTop: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    fontSize: 20,
    fontWeight: '400',
    marginTop: -2,
  },
});

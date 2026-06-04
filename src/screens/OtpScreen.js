import React, { useRef, useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  Modal,
} from 'react-native';
// import { useNavigation } from '@react-navigation/native';

export default function OtpScreen({ navigation }) {
  // const navigation = useNavigation();
  const [otp, setOtp] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const inputRef = useRef(null);

  const handleOtpChange = value => {
    const formatted = value.replace(/[^0-9]/g, '').slice(0, 4);
    setOtp(formatted);
  };

  const handleVerify = () => {
    if (otp.length !== 4) {
      alert('Please enter a valid 4-digit OTP');
      return;
    }

    // navigation.navigate('PasswordLogin');
    setShowSuccessModal(true);
  };

  return (
    <>
      <Modal
        visible={showSuccessModal}
        transparent
        animationType="fade"
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>

            <Text style={styles.checkIcon}>✓</Text>

            <Text style={styles.modalTitle}>
              Registered Successfully
            </Text>

            <Text style={styles.modalDescription}>
              Your registration was successful! Welcome aboard
              and enjoy the app.
            </Text>

            <Pressable
              style={styles.doneButton}
              onPress={() => {
                setShowSuccessModal(false);

                // Navigate to next screen
                setTimeout(() => {
                  navigation.navigate('InterestCategory');
                }, 200);
              }}
            >
              <Text style={styles.doneButtonText}>Done</Text>
            </Pressable>

          </View>
        </View>
      </Modal>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#09090F" />

        {/* Header */}
        <View style={styles.header}>
          <Pressable
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backIcon}>←</Text>
          </Pressable>

          <Text style={styles.logo}>Solfana</Text>
        </View>

        {/* Content */}
        <View style={styles.content}>
          <Text style={styles.title}>Verification Code</Text>

          <Text style={styles.subtitle}>
            Enter the 4-digit verification code sent to your email address.
          </Text>

          {/* OTP Boxes */}
          <Pressable
            onPress={() => inputRef.current?.focus()}
            style={styles.otpContainer}
          >
            {[0, 1, 2, 3].map(index => {
              const digit = otp[index] || '';
              const active = otp.length === index;

              return (
                <View
                  key={index}
                  style={[
                    styles.otpBox,
                    active && styles.otpBoxActive,
                  ]}
                >
                  <Text style={styles.otpText}>{digit}</Text>
                </View>
              );
            })}
          </Pressable>

          {/* Hidden Input */}
          <TextInput
            ref={inputRef}
            autoFocus
            keyboardType="number-pad"
            maxLength={4}
            value={otp}
            onChangeText={handleOtpChange}
            style={styles.hiddenInput}
            caretHidden
          />

          {/* Resend */}
          <View style={styles.resendRow}>
            <Text style={styles.resendText}>
              Didn't receive the code?
            </Text>

            <Pressable>
              <Text style={styles.resendButton}>
                Resend
              </Text>
            </Pressable>
          </View>

          {/* Verify Button */}
          <Pressable
            style={({ pressed }) => [
              styles.verifyButton,
              pressed && { opacity: 0.85 },
            ]}
            onPress={handleVerify}
          >
            <Text style={styles.verifyText}>
              Verify OTP
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>

    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09090F',
    paddingHorizontal: 24,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },

  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#171721',
    alignItems: 'center',
    justifyContent: 'center',
  },

  backIcon: {
    color: '#fff',
    fontSize: 20,
  },

  logo: {
    color: '#F24FD9',
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 15,
  },

  content: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    color: '#fff',
    fontSize: 32,
    fontWeight: '800',
    marginBottom: 10,
  },

  subtitle: {
    color: '#A1A1AA',
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 40,
  },

  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },

  otpBox: {
    width: 70,
    height: 70,
    borderRadius: 18,
    backgroundColor: '#171721',
    borderWidth: 1,
    borderColor: '#2A2A36',
    justifyContent: 'center',
    alignItems: 'center',
  },

  otpBoxActive: {
    borderColor: '#F24FD9',
  },

  otpText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '700',
  },

  hiddenInput: {
    position: 'absolute',
    opacity: 0,
    width: 1,
    height: 1,
  },

  resendRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },

  resendText: {
    color: '#A1A1AA',
    fontSize: 14,
  },

  resendButton: {
    color: '#F24FD9',
    fontSize: 14,
    fontWeight: '700',
  },

  verifyButton: {
    height: 58,
    borderRadius: 29,
    backgroundColor: '#F24FD9',
    justifyContent: 'center',
    alignItems: 'center',
  },

  verifyText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.75)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalContainer: {
    width: '85%',
    backgroundColor: '#1A1029',
    borderRadius: 28,
    padding: 25,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },

  checkIcon: {
    fontSize: 70,
    color: '#D100FF',
    fontWeight: 'bold',
    marginBottom: 15,
  },

  modalTitle: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 10,
  },

  modalDescription: {
    color: '#D1D1D1',
    textAlign: 'center',
    fontSize: 15,
    lineHeight: 24,
    marginBottom: 25,
  },

  doneButton: {
    width: '100%',
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.25)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  doneButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
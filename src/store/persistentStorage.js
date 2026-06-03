import AsyncStorage from '@react-native-async-storage/async-storage';

const memoryStore = new Map();

async function readMemory(key) {
  return memoryStore.has(key) ? memoryStore.get(key) : null;
}

export async function safeGetItem(key) {
  try {
    return await AsyncStorage.getItem(key);
  } catch (error) {
    return readMemory(key);
  }
}

export async function safeSetItem(key, value) {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    memoryStore.set(key, value);
  }
}

export async function safeRemoveItem(key) {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    memoryStore.delete(key);
  }
}

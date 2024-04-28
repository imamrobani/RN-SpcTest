import {MMKV} from 'react-native-mmkv';

interface Storage {
  getItem(key: string, ...args: Array<any>): any;
  setItem(key: string, value: any, ...args: Array<any>): any;
  removeItem(key: string, ...args: Array<any>): any;
}

export const storage = new MMKV({
  id: 'SiCantik',
  encryptionKey: 'sicantik123!@#',
});

export const mmkvStorage: Storage = {
  setItem: (key, value) => {
    storage.set(key, value);
    return Promise.resolve(true);
  },
  getItem: key => {
    const value = storage.getString(key);
    return Promise.resolve(value);
  },
  removeItem: key => {
    storage.delete(key);
    return Promise.resolve();
  },
};

export const storeDataStorage = (storageKey: string, value: any) => {
  const jsonValue = JSON.stringify(value);
  storage.set(storageKey, jsonValue);
};

export const getDataStorage = (storageKey: string) => {
  const jsonValue = storage.getString(storageKey);
  return jsonValue != null ? JSON.parse(jsonValue) : null;
};

export const removeKeyStorage = (storageKey: string) => {
  storage.delete(storageKey);
};

export const clearStorage = () => {
  storage.clearAll();
};

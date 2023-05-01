import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBnm5m1sVl7ruWsmr7tsTxItx-RXLB6fyc',
  authDomain: 'chatgpt-openai-api.firebaseapp.com',
  projectId: 'chatgpt-openai-api',
  storageBucket: 'chatgpt-openai-api.appspot.com',
  messagingSenderId: '690988267472',
  appId: '1:690988267472:web:40d38acfd8087fc2c5ebd5',
  measurementId: 'G-V97ET9LZHB',
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

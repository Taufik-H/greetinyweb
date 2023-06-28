// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase, ref, onValue } from 'firebase/database';

const firebaseConfig = {
  apiKey: `${import.meta.env.VITE_FIREBASE_API_KEY}`,
  authDomain: `${import.meta.env.VITE_FIREBASE_AUTH_DOMAIN}`,
  databaseURL: `${import.meta.env.VITE_FIREBASE_DATABASE_URL}`,
  projectId: `${import.meta.env.VITE_FIREBASE_PROJECT_ID}`,
  storageBucket: `${import.meta.env.VITE_FIREBASE_STORAGE_BUCKET}`,
  messagingSenderId: `${import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID}`,
  appId: `${import.meta.env.VITE_FIREBASE_APP_ID}`,
  measurementId: `${import.meta.env.VITE_FIREBASE_MEASUREMENT_ID}`,
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const kartuRef = ref(database, 'kartu');

const fetchKartuData = () => {
  return new Promise((resolve, reject) => {
    onValue(
      kartuRef,
      (snapshot) => {
        const data = snapshot.val();
        resolve(data);
      },
      (error) => {
        reject(error);
      }
    );
  });
};

export { kartuRef, fetchKartuData };

// FORMAT LINK ENDPOINT
// http://127.0.0.1:5173/kartu/-NYLlnSG-xHscZkZ5c-D

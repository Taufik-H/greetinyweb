// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase, ref, onValue } from 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
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

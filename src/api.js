// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase, ref, onValue } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyCr9UfDAuWrrSBH_sboDvag8LkxAgZ8O6c',
  authDomain: 'luminousgreetiny.firebaseapp.com',
  databaseURL: 'https://luminousgreetiny-default-rtdb.firebaseio.com',
  projectId: 'luminousgreetiny',
  storageBucket: 'luminousgreetiny.appspot.com',
  messagingSenderId: '843000764630',
  appId: '1:843000764630:web:f00829c77f02b3e60bd177',
  measurementId: 'G-MEZ80RHYX2',
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

import { initializeApp } from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENTID,
};

// Firebase 앱 초기화
const firebasedb = initializeApp(firebaseConfig);
// Firebase Analytics 초기화 (클라이언트 환경에서만 실행)
if (typeof window !== 'undefined') {
  isSupported().then((supported) => {
    if (supported) {
      getAnalytics(firebasedb);
    }
  });
}

export default firebasedb;

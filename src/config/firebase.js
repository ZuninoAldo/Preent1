import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAfU1rAnGsdd6Xr4Iz0PaMBFYM0eq_5LEc",
    authDomain: "react-curso-68535.firebaseapp.com",
    projectId: "react-curso-68535",
    storageBucket: "react-curso-68535.firebasestorage.app",
    messagingSenderId: "496505721115",
    appId: "1:496505721115:web:fd93d063252e7240c5c3be"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
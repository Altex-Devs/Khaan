import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD7WWS5KZpk5uh0wKgMLo2Qsnc71LFTc-I",
  authDomain: "khaan-e3b0c.firebaseapp.com",
  projectId: "khaan-e3b0c",
  storageBucket: "khaan-e3b0c.appspot.com",
  messagingSenderId: "847608610736",
  appId: "1:847608610736:web:4091ef1a747065bbc22075",
  measurementId: "G-L8BBC6FDPL",
};

export const app = initializeApp(firebaseConfig);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});
export const storage = getStorage(app);

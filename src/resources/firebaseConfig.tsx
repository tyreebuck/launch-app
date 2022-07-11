import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "@firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: process.env.REACT_APP_DB_AUTH,
  projectId: process.env.REACT_APP_DB_PROJECT,
  storageBucket: process.env.REACT_APP_DB_BUCKET,
  messagingSenderId: "342372414393",
  appId: "1:342372414393:web:06d4970a43de8b06bd3c68",
  measurementId: "G-YWX75T74G1",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const storage = getStorage(app);
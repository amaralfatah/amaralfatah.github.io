import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"; // Hapus getAnalytics karena tidak digunakan

const firebaseConfig = {
  apiKey: "AIzaSyC0O-j0eFPzYoTwXeA9qIktyHg89DOGBq4",
  authDomain: "portfolio-49fab.firebaseapp.com",
  databaseURL:
    "https://portfolio-49fab-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "portfolio-49fab",
  storageBucket: "portfolio-49fab.firebasestorage.app",
  messagingSenderId: "48978946478",
  appId: "1:48978946478:web:4fae09c41c45d6de2c003f",
  measurementId: "G-YF2ZE2L9CC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database; // Ubah menjadi export default

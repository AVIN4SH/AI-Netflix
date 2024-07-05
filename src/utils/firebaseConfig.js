import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDEP6vy_y2BocrkTwhspp-XJUlNmxLGgxU",
  authDomain: "ai-netflix-70cbd.firebaseapp.com",
  projectId: "ai-netflix-70cbd",
  storageBucket: "ai-netflix-70cbd.appspot.com",
  messagingSenderId: "214397890242",
  appId: "1:214397890242:web:2feeba81291dba0dd4d55b",
  measurementId: "G-6SY6BDV3WL",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

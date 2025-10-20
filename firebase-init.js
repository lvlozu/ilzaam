// firebase-init.js — shared Firebase init (no auth).
// Fill SITE_KEY with your App Check reCAPTCHA v3 site key.

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";
import { initializeAppCheck, ReCaptchaV3Provider } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app-check.js";

export const firebaseConfig = {
  apiKey: "AIzaSyBcB_uWEiMyjddr8xg8fzNJD9hQx8mAFX0",
  authDomain: "bizolve-hs-sec.firebaseapp.com",
  projectId: "bizolve-hs-sec",
  storageBucket: "bizolve-hs-sec.appspot.com",
  messagingSenderId: "548131082863",
  appId: "1:548131082863:web:9a47cc8df9aa00a655339a",
  measurementId: "G-SD6CY1RCNG"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// App Check (no login required)
const SITE_KEY = "PUT_YOUR_RECAPTCHA_V3_SITE_KEY_HERE";

initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider(SITE_KEY),
  isTokenAutoRefreshEnabled: true
});

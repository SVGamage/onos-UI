// authService.js

import {
  // getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "./firebase-config";

const authService = {
  // Function for handling user login
  login: async (username, password) => {
    try {
      const user = await signInWithEmailAndPassword(auth, username, password);
      return user;
    } catch (error) {
      throw error;
    }
  },

  // Function for handling user logout
  logout: async () => {
    try {
      await signOut(auth);
    } catch (error) {
      throw error;
    }
  },

  // Function to observe changes in authentication state
  onAuthStateChanged: (callback) => {
    const unsubscribe = onAuthStateChanged(auth, callback);
    return unsubscribe;
  },
};

export default authService;

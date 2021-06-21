import { createSlice } from "@reduxjs/toolkit";
import firebase from "firebase/app";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    userId: "",
    isLoggedIn: false,
  },
  reducers: {
    signIn(state, action) {},

    signUp(state, action) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(
          action.payload.email,
          action.payload.password
        )
        .then((userCredential) => {
          console.log(userCredential);
        })
        .catch((error) => {
          console.log(error.message);
        });
    },

    signOut(state, action) {},
  },
});

// Action creators are generated for each case reducer function
export const authActions = authSlice.actions;

export default authSlice.reducer;

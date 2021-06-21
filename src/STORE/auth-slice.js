import { createSlice } from "@reduxjs/toolkit";
import firebase from "firebase/app";
import "firebase/auth";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    userId: "",
    isLoggedIn: false,
    message: {
      type: "",
      content: "",
    },
  },
  reducers: {
    signIn(state, action) {},

    catchError(state, action) {
      state.message = { type: "error", content: action.payload.error };
    },

    thenConfirm(state) {
      state.message = {
        type: "confirm",
        content: "Account created successfully",
      };
    },

    clearMessage(state) {
      state.message = { type: "", content: "" };
    },

    signOut(state, action) {},
  },
});

export const signUp = (email, password) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        dispatch(authActions.thenConfirm());
      })
      .catch((error) => {
        dispatch(authActions.catchError({ error: error.message }));
      });
  };
};

// Action creators are generated for each case reducer function
export const authActions = authSlice.actions;

export default authSlice;

import { createSlice } from "@reduxjs/toolkit";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    userId: "",
    message: {
      type: "",
      content: "",
    },
  },
  reducers: {
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

    assignUserId(state, action) {
      state.userId = action.payload.uid;
    },

    signUserOut(state) {
      state.userId = "";
    },
  },
});

const createUserInDB = (id) => {
  const db = firebase.firestore();
  db.collection("users")
    .doc(id)
    .set({
      first: "Ada",
      last: "Lovelace",
      born: 1815,
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
};

export const signUp = (email, password) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        dispatch(authActions.thenConfirm());
        createUserInDB(userCredential.user.uid);
      })
      .catch((error) => {
        dispatch(authActions.catchError({ error: error.message }));
      });
  };
};

export const signIn = (email, password, history) => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        dispatch(authActions.assignUserId({ uid: userCredential.user.uid }));
        history.push("/workouts");
      })
      .catch((error) => {
        dispatch(authActions.catchError({ error: error.message }));
      });
  };
};

export const signOut = (history) => {
  return (dispatch) => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch(authActions.signUserOut());
        history.push("/sign-in");
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

// Action creators are generated for each case reducer function
export const authActions = authSlice.actions;

export default authSlice;

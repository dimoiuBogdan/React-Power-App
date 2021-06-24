import { createSlice } from "@reduxjs/toolkit";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    userId: "",
    connected: false,
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

    setCustomMessage(state, action) {
      state.message.type = action.payload.type;
      state.message.content = action.payload.content;
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
  db.collection("users").doc(id).set({
    uid: id,
    connected: false,
  });
};

const updateUserOnLogin = async (id, loginState) => {
  const db = firebase.firestore();
  const userRef = db.collection("users").doc(id);
  return userRef.update({
    connected: loginState,
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
        updateUserOnLogin(userCredential.user.uid, true);
        history.push("/workouts");
      })
      .catch((error) => {
        dispatch(authActions.catchError({ error: error.message }));
      });
  };
};

export const signOut = (history, userId) => {
  return (dispatch) => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch(authActions.signUserOut());
        updateUserOnLogin(userId, false);
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

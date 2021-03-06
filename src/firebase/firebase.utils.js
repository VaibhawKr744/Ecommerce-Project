import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAZ0gYN_SdSXsHX0aYsMldrft6TDN2jly0",
    authDomain: "crwn-db-a78b8.firebaseapp.com",
    databaseURL: "https://crwn-db-a78b8.firebaseio.com",
    projectId: "crwn-db-a78b8",
    storageBucket: "crwn-db-a78b8.appspot.com",
    messagingSenderId: "480279847120",
    appId: "1:480279847120:web:42a0395100bd0a811abed5"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const {displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
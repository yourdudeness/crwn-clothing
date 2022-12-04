import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,

} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAjvhAcJISXtxBdlLPT7dz3Ur92_bQsfx4",
    authDomain: "crwn-clothing-db-26473.firebaseapp.com",
    projectId: "crwn-clothing-db-26473",
    storageBucket: "crwn-clothing-db-26473.appspot.com",
    messagingSenderId: "577372344105",
    appId: "1:577372344105:web:5833738f8b68359d7ef138"
};

// Initialize Firebase
const firebaseaApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider)
export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapShot = await getDoc(userDocRef)


    if (!userSnapShot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }
    return userDocRef
}
import { GoogleAuthProvider, getAuth, getRedirectResult, signInWithEmailAndPassword, signInWithPopup, signInWithRedirect, signOut } from "firebase/auth";
import { firebaseErrorToText } from "./firebaseErrorToText";
import toast from "react-hot-toast";

const auth = getAuth();
const provider = new GoogleAuthProvider();

export async function loginWithEmailAndPassword(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    const user = userCredential.user
    toast.success("¡Has iniciado sesión correctamente!")
    return user
  } catch (error) {
    toast.error(firebaseErrorToText(error))
    return null
  }
}

export async function loginWithGoogleProvider() {
  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result)
    const token = credential.accessToken
    const user = result.user
    toast.success("¡Has iniciado sesión correctamente!")
    return user
  } catch (error) {
    const credential = GoogleAuthProvider.credentialFromError(error)
    toast.error(firebaseErrorToText(error))
    return null
  }
}

export async function loginWithRedirectGoogleProvider() {
  try {
    await signInWithRedirect(auth, provider)
  } catch (error) {
    toast.error(firebaseErrorToText(error))
  }
}

export async function getRedirectResultGoogleProvider() {
  try {
    const result = await getRedirectResult(auth)
    if (result === null) return result
    const credential = GoogleAuthProvider.credentialFromResult(result)
    const token = credential.accessToken
    const user = result.user
    toast.success("¡Has iniciado sesión correctamente!")
    return result
  } catch (error) {
    const credential = GoogleAuthProvider.credentialFromError(error)
    toast.error(firebaseErrorToText(error))
    return null
  }
}

export async function signOutSession() {
  try {
    await signOut(auth)
    toast.success("Se ha finalizado sesión")
  } catch (error) {
    toast.error(firebaseErrorToText(error));
  }
}
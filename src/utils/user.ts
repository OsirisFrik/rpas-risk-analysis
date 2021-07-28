import firebase from 'firebase/app'
import 'firebase/firestore'

const users = firebase.firestore().collection('users')

export async function validateUser(
  user: firebase.User,
  isNew = false
): Promise<boolean> {
  const userDoc = await users.doc(user?.uid).get()

  if (
    isNew ||
    (!userDoc.exists || userDoc.data()!.acept)
  ) return false

  return true
}

export async function createUserDoc(user: firebase.User): Promise<void> {
  return await users.doc(user.uid).set({
    displayName: user.displayName,
    email: user.email,
    accept: true
  })
}

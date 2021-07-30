import firebase from 'firebase/app'
import 'firebase/firestore'

const users = firebase.firestore().collection('users')

export interface UserFormData {
  firstName: string
  middleName?: string
  lastName: string
  secondLastName?: string
  licence?: string
  country: string
  birthday?: string
  expiration?: string
}

export interface UserData extends UserFormData {
  fullName: string
}

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

export async function createUserDoc(user: firebase.User, userData: UserFormData): Promise<void> {
  return await users.doc(user.uid).set({
    displayName: user.displayName,
    email: user.email,
    accept: true,
    data: {
      ...userData,
      fullName: `${userData.firstName} ${userData.middleName} ${userData.lastName} ${userData.secondLastName}`.replace(/\s+/g, ' ').trim()
    }
  })
}

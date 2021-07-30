import firebase from 'firebase/app'
import 'firebase/auth'

const configStr = process.env.VUE_APP_FIREBASE

if (!configStr) throw new Error('no firebase config')

const config = JSON.parse(configStr)

firebase.initializeApp(config)

// firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)

import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { API_KEY, APP_ID, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID } from '@env'

const firebaseConfig = {
	// TODO: how it will work with eas build? 
	apiKey: API_KEY,
	authDomain: AUTH_DOMAIN,
	projectId: PROJECT_ID,
	storageBucket: STORAGE_BUCKET,
	messagingSenderId: MESSAGING_SENDER_ID,
	appId: APP_ID
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db
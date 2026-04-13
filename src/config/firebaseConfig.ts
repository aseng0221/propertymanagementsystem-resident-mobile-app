import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import app from '@react-native-firebase/app';

// In React Native Firebase CLI, native config (google-services.json / GoogleService-Info.plist)
// handles initialization. Thus we usually just export the module handles.

export { auth, firestore, app };

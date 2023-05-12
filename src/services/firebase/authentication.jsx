import {
    GoogleAuthProvider,
    signInWithPopup,
    getAdditionalUserInfo,
    isSignInWithEmailLink,
    signInWithEmailLink
} from "firebase/auth";
import { auth } from '../firebase/config';

export const handleGoogleLogin = async (provider) => {
    const result = await signInWithPopup(auth, provider);
    try {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        const detail = getAdditionalUserInfo(result);
        const { email, photoURL, uid } = user;
        setUser({
            email: email,
            photoURL: photoURL,
            uid: uid
        })
        if (detail.isNewUser) {
            navigate('/user-info');
        }
        else { // account existed
            getAccount('users', {
                fieldName: 'uid',
                operator: '==',
                compareValue: uid
            }).then((data) => {
                setProfileData(data[0]);
                localStorage.setItem('data', JSON.stringify(data[0]));
            })
        }
    } catch (err) {
        openNotification();
    }
};


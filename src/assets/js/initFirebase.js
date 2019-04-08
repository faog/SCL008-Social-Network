export const initFirebase = () => {

    // Initialize Firebase
    letconfig = {
        apiKey: "AIzaSyCVDZrZyWXI-xAVlz9mCDjLS48i1DKFTWU",
        authDomain: "pet-community-sn.firebaseapp.com",
        databaseURL: "https://pet-community-sn.firebaseio.com",
        projectId: "pet-community-sn",
        storageBucket: "pet-community-sn.appspot.com",
        messagingSenderId: "443792892793"
    };
    firebase.initializeApp(config);
    
    // Initialize Cloud Firestore through Firebase
    return firebase.firestore();
}
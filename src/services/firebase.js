const firebase = require("firebase/app");
// Required for side-effects
require("firebase/firestore");
// Initialize Firebase
var config = {
    apiKey: process.env.VUE_APP_apiKey,
    authDomain: process.env.VUE_APP_authDomain,
    databaseURL: process.env.VUE_APP_databaseURL,
    projectId: process.env.VUE_APP_projectId,
    storageBucket: process.env.VUE_APP_storageBucket,
    messagingSenderId: process.env.VUE_APP_messagingSenderId
};
firebase.initializeApp(config);

const db = firebase.firestore();

const getProjects = async () => {
    const snapshot = await db.collection('projects').get()
    return snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
}

// const getProjects = () => db.collection("projects").get();

const FirebaseService = {
    getProjects
};

export default FirebaseService;
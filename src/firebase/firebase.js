import * as firebase from 'firebase';


// Create database
const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {firebase, googleAuthProvider, database as default };

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log('Child removed: ', snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log('Child changed: ', snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log('Child added: ', snapshot.key, snapshot.val());
// });

// const onValueChange = database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//     console.log(expenses);
// })}, (e) => {
//   console.log('Error thrown reading expenses from Firebase db.', e);
// });

// database.ref('expenses')
// .once('value')
// .then((snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// }).catch((e) => {
//   console.log('Error thrown reading expenses from Firebase db.', e);
// });

// database.ref('expenses').push({
//   ...expenses[0]
// }).then(() => {
//   console.log('Pushed expense[0] to Firebase db');
// }).catch((e) => {
//   console.log('Error thrown pushing expenses[0] to Firebase db.', e);
// });

// database.ref('expenses').push({
//   ...expenses[1]
// }).then(() => {
//   console.log('Pushed expense[1] to Firebase db');
// }).catch((e) => {
//   console.log('Error thrown pushing expense[1] to Firebase db.', e);
// });

// database.ref('expenses').push({
//   ...expenses[2]
// }).then(() => {
//   console.log('Pushed expense[2] to Firebase db');
// }).catch((e) => {
//   console.log('Error thrown pushing expense[2] to Firebase db.', e);
// });




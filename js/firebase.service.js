import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js'


const firebaseConfig = {
    projectId: 'localsmart-app',
    appId: '1:109488436340:web:3210f7f99c95781c50cd21',
    databaseURL: 'https://localsmart-app-default-rtdb.firebaseio.com',
    storageBucket: 'localsmart-app.appspot.com',
    locationId: 'southamerica-east1',
    apiKey: 'AIzaSyBAT2cQCFaCz9CiHULZjYjzDgR4SMeK3go',
    authDomain: 'localsmart-app.firebaseapp.com',
    messagingSenderId: '109488436340',
    measurementId: 'G-G59K18NW3F',

};




export const app = initializeApp(firebaseConfig);


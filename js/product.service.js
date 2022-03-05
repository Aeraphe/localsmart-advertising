import { app } from "./firebase.service.js";
import { getFirestore, getDocs, collection } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js';


const productColectionName = 'products';
const db = getFirestore();



export const getProducts = async () => {
    let products = [];
    let querySnapshot = await getDocs(
        collection(db, productColectionName)
    );

    querySnapshot.forEach((doc) => {
        products.push({ ...doc.data(), id: doc.id });
    });

    return products;
};


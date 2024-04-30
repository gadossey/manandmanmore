import { useState, useEffect } from 'react';
import firebase from '../firebase';

const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('products')
      .onSnapshot((snapshot) => {
        const newProducts = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));

        setProducts(newProducts);
      });

    return () => unsubscribe();
  }, []);

  return products;
};

export default useProducts;

import { useState, useEffect } from 'react';
import firebase from '../firebase';

const useProductBySerialNumber = (serialNumber) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('products')
      .where('serialNumber', '==', serialNumber)
      .onSnapshot((snapshot) => {
        const products = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));

        setProduct(products[0] || null);
      });

    return () => unsubscribe();
  }, [serialNumber]);

  return product;
};

export default useProductBySerialNumber;

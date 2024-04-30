import React, { useState, useEffect } from 'react';
import { useAuth } from '../firebase/useAuth';
import { db } from '../firebase';

export default function StoveDetails() {
  const { user } = useAuth();
  const [stoves, setStoves] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection('users').doc(user.uid).get().then(doc => {
        if (doc.exists) {
          setStoves(doc.data().stoves || []);
        }
      });
    }
  }, [user]);

  if (!stoves.length) {
    return <p>Loading stoves...</p>;
  }

  return (
    <div>
      <h2>Your Stove Details</h2>
      {stoves.map((stove, index) => (
        <div key={index}>
          <p>Serial Number: {stove.serialNumber}</p>
          <p>Warranty Expiry Date: {stove.warrantyExpiryDate}</p>
        </div>
      ))}
    </div>
  );
}

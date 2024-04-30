import React, { useEffect, useState } from 'react';
import { useAuth } from '../firebase/useAuth';
import { db } from '../firebase';

export default function Subscription() {
  const { user } = useAuth();
  const [subscription, setSubscription] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (user) {
      const unsubscribe = db.collection('users').doc(user.uid).collection('subscription')
        .onSnapshot(snapshot => {
          setLoading(false);
          setSubscription(snapshot.docs.map(doc => ({id: doc.id, ...doc.data()})));
        }, err => {
          setLoading(false);
          setError(err);
        });

      return unsubscribe;
    } else {
      setLoading(false);
    }
  }, [user]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!subscription) return <p>No Subscription found.</p>;

  return (
    <div>
      <h2>Your Subscription</h2>
      {subscription.map(sub => (
        <div key={sub.id}>
          <p>Subscription Name: {sub.name}</p>
          <p>Description: {sub.description}</p>
          <p>Status: {sub.isActive ? 'Active' : 'Inactive'}</p>
        </div>
      ))}
    </div>
  );
}

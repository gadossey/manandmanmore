import React, { useEffect, useState } from 'react';
import { useAuth } from '../firebase/useAuth';
import { db } from '../firebase';

export default function RewardProgram() {
  const { user } = useAuth();
  const [rewardProgram, setRewardProgram] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (user) {
      const unsubscribe = db.collection('users').doc(user.uid).collection('rewardProgram')
        .onSnapshot(snapshot => {
          setLoading(false);
          setRewardProgram(snapshot.docs.map(doc => ({id: doc.id, ...doc.data()})));
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
  if (!rewardProgram) return <p>No Reward Program found.</p>;

  return (
    <div>
      <h2>Your Reward Program</h2>
      {rewardProgram.map(program => (
        <div key={program.id}>
          <p>Program Name: {program.name}</p>
          <p>Description: {program.description}</p>
          <p>Status: {program.isActive ? 'Active' : 'Inactive'}</p>
        </div>
      ))}
    </div>
  );
}

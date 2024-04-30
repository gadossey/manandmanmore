import React from 'react';
import { useAuth } from '../firebase/useAuth';
import InviteUserForm from './InviteUserForm';

export default function Admin() {
  const { user } = useAuth();

  return (
    <div>
      <h1>Welcome, Admin {user.displayName}</h1>
      <InviteUserForm />
    </div>
  );
}

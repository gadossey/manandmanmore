import React, { useState } from 'react';
import { functions } from '../firebase';

const inviteUser = functions.httpsCallable('inviteUser');

export default function InviteUserForm() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    inviteUser({ phoneNumber, role })
      .then(() => alert('User invited successfully.'))
      .catch((error) => alert(error.message));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Phone Number:
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
      </label>
      <label>
        Role:
        <input
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
        />
      </label>
      <button type="submit">Invite User</button>
    </form>
  );
}

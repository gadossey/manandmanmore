// VerificationCode.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from 'gatsby';
import { auth as firebaseAuth, signInWithPhoneNumberAuth } from '../api/firebase';  // adjust the path accordingly

const VerificationCode = ({
  handleNext,
  handleBack,
  verificationId,
  setVerificationCode,
  verificationCode,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleCodeSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      // Send the verification code and ID to your backend
      const response = await axios.post("/api/verifyCode", { verificationId, code: verificationCode });
      const { token, role } = response.data;
      // Use the token to sign in with Firebase
      await firebaseAuth.signInWithCustomToken(token);
      
      // Depending on their role, route the user to the appropriate page
      switch (role) {
        case 'customer':
          // Allow the user to continue the registration process
          handleNext();
          break;
        case 'admin':
        case 'superadmin':
        case 'retailers':
        case 'managers':
        case 'accountants':
        case 'safetyTeam':
          // Redirect the user to their dashboard
          navigate(`/${role}`);
          break;
        default:
          // For unrecognized roles, log out the user
          await firebaseAuth.signOut();
          break;
      }
    } catch (error) {
      console.error('Error verifying code:', error);
    }
    setIsLoading(false);
  };
  

  return (
    <form onSubmit={handleCodeSubmit}>
      <input
        type="text"
        value={verificationCode}
        onChange={(e) => setVerificationCode(e.target.value)}
        placeholder="Enter the verification code"
      />
      <button type="submit" disabled={isLoading}>
        Verify Code
      </button>
    </form>
  );
};
export default VerificationCode;

import React, { useEffect } from 'react';
import { signInWithPhoneNumber } from '../api/firebase';

function PhoneNumberSignInForm() {
    const [verificationCode, setVerificationCode] = useState('');
    const [confirmationResult, setConfirmationResult] = useState(null);
    const recaptchaVerifier = useRef(null);
  
    const handlePhoneNumberSubmit = async (e) => {
      e.preventDefault();
      const phoneNumber = e.target.phoneNumber.value;
  
      // Ensure reCAPTCHA is executed
      if (!recaptchaVerifier.current) {
        recaptchaVerifier.current = new firebase.auth.RecaptchaVerifier('recaptcha-container', { 'size': 'invisible' });
      }
  
      const appVerifier = recaptchaVerifier.current;
      const result = await signInWithPhoneNumber(phoneNumber, appVerifier);
      setConfirmationResult(result);
    };
  
    const handleVerificationCodeSubmit = async (e) => {
      e.preventDefault();
      try {
        const result = await confirmationResult.confirm(verificationCode);
        // You can retrieve the user from result.user
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <div>
        <form onSubmit={handlePhoneNumberSubmit}>
          <input name="phoneNumber" type="tel" placeholder="Phone number" required />
          <button type="submit">Send verification code</button>
        </form>
        <form onSubmit={handleVerificationCodeSubmit}>
          <input value={verificationCode} onChange={e => setVerificationCode(e.target.value)} type="number" placeholder="Verification code" required />
          <button type="submit">Sign In</button>
        </form>
        <div id="recaptcha-container"></div>
      </div>
    );
  }
  
  export default PhoneNumberSignInForm;
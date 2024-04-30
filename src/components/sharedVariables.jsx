import React, { useState } from 'react';



export const usePhoneNumber = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  return [phoneNumber, setPhoneNumber];
};

export const useSerialNumber = () => {
  const [serialNumber, setSerialNumber] = useState('');
  return [serialNumber, setSerialNumber];
};

export const useLocation = () => {
  const [location, setLocation] = useState('');
  return [location, setLocation];
};

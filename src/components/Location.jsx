import React, { useState, useEffect } from 'react';
import {
  NotFoundWrapper,
  Container,
  ViewTitle,
  Button,
  BackButton,
  Alert
} from './SharedComponents';

const Location = ({
  handleNext,
  handleBack,
  setLocationData,
  locationData
}) => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [customLocation, setCustomLocation] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setSelectedCountry(locationData.country);
    setSelectedCity(locationData.city);
    setSelectedRegion(locationData.region);
    setCustomLocation(locationData.customLocation);
  }, [locationData]);
  
  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords;
          fetchLocation(latitude, longitude);
        }, (error) => {
          setError('Error getting location');
          setIsLoading(false);
        });
      } else {
        setError('Geolocation is not supported by this browser.');
        setIsLoading(false);
      }
    };

    getLocation();
  }, []);

  const fetchLocation = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyBwOz9BWW_88i6_5hBwXpz5FAxBjLAXMBQ`
      );
      const data = await response.json();

      if (data.results.length > 0) {
        const result = data.results[0];
        const addressComponents = result.address_components;

        let country = '';
        let city = '';
        let region = '';

        for (let i = 0; i < addressComponents.length; i++) {
          const component = addressComponents[i];
          const types = component.types;

          if (types.includes('country')) {
            country = component.long_name;
          } else if (types.includes('locality') || types.includes('postal_town')) {
            city = component.long_name;
          } else if (types.includes('administrative_area_level_1')) {
            region = component.long_name;
          }
        }

        setSelectedCountry(country);
        setSelectedCity(city);
        setSelectedRegion(region);
      }

      setIsLoading(false);
    } catch (error) {
      setError('Error fetching location details');
      setIsLoading(false);
    }
  };

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const handleRegionChange = (e) => {
    setSelectedRegion(e.target.value);
  };

  const handleCustomLocationChange = (e) => {
    setCustomLocation(e.target.value);
  };

  const handleSubmit = () => {
    setLocationData({
      country: selectedCountry,
      city: selectedCity,
      region: selectedRegion,
      customLocation: customLocation
    });
    handleNext();
  };
  const isFormValid = selectedCountry && selectedCity && selectedRegion && customLocation;

  return (
    <NotFoundWrapper>
      <Container>
        <ViewTitle>Location</ViewTitle>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
          
        ) : (
          <>
            <input
              type="text"
              placeholder="Country"
              value={selectedCountry}
              onChange={handleCountryChange}
            />
            <input
              type="text"
              placeholder="City"
              value={selectedCity}
              onChange={handleCityChange}
            />
            <input
              type="text"
              placeholder="Region"
              value={selectedRegion}
              onChange={handleRegionChange}
            />
            <input
              type="text"
              placeholder="Custom Location"
              value={customLocation}
              onChange={handleCustomLocationChange}
            />
               <Button onClick={handleSubmit} disabled={!isFormValid}>
              Submit
            </Button>
          </>
        )}
        <BackButton onClick={handleBack}>Back</BackButton>
      </Container>
    </NotFoundWrapper>
  );
};

export default Location;

import React from 'react';
import {
  NotFoundWrapper,
  Container,
  ViewTitle,
  ViewContent,
  Button,
  Instruction
} from './SharedComponents';

const StoveRegistration = ({ handleNext }) => (
  <NotFoundWrapper>
    <Container>
      <ViewTitle>
        Hi, your stove with serial number has already been registered.
      </ViewTitle>
      <ViewTitle>
        We'd like you to take a few short steps to register your stove.
      </ViewTitle>
      <ViewContent>
        <Instruction>Your Phone Number</Instruction>
        <Instruction>Location</Instruction>
        <Instruction>Your Name</Instruction>
      </ViewContent>
      <Button onClick={handleNext}>Let's Go</Button>
    </Container>
  </NotFoundWrapper>
);

export default StoveRegistration;

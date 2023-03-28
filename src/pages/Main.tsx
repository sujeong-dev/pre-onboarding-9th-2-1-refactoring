import Header from '../components/Header';
import { Container } from '@chakra-ui/react';
import React from 'react';

export default function MainPage() {
  return (
    <Container maxW='1080px' backgroundColor='white'>
      <Header />
    </Container>
  );
}

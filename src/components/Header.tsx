import { Button, Grid, GridItem, Heading, Icon } from '@chakra-ui/react';
import React from 'react';
import { BsChevronLeft } from 'react-icons/bs';
import { BsCart2 } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate(-1);
  };

  return (
    <Grid
      templateAreas={`"left header right"`}
      templateColumns='repeat(3, minmax(50px, auto))'
      gap={6}
      alignItems='center'
      justifyContent='space-between'
      p={3}>
      <GridItem area='left'>
        <Button onClick={onClickHandler} backgroundColor='transparent'>
          <Icon as={BsChevronLeft} boxSize='6' />
        </Button>
      </GridItem>
      <GridItem area='header'>
        <Heading as='h1' textAlign='center' whiteSpace='nowrap' fontSize='2xl'>
          라이크어로컬
        </Heading>
      </GridItem>
      <GridItem area='right' textAlign='right'>
        <Link to='/reservations'>
          <Icon as={BsCart2} boxSize='6' />
        </Link>
      </GridItem>
    </Grid>
  );
};

export default Header;

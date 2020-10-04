import React from 'react';
import HeroImage from './HeroImage';
import CardContainer from './CardContainer';
import WarningAlert from './WarningAlert';

const Home = () => {
  return (
    <>
      <WarningAlert />
      <HeroImage />
      <CardContainer />
    </>
  );
};

export default Home;

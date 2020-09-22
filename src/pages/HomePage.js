import React from 'react';

import Hero from '../components/Hero';
import HomeContent from '../components/HomeContent';

function HomePage(props) {
  return (
  <div>
    <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
    <HomeContent />
  </div>
  );
}

export default HomePage;

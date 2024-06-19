import { Base } from '../Base';
import { mockBase } from '../Base/mock';

import React from 'react';

const Home = () => {
  return <Base {...mockBase} />;
};

export default Home;

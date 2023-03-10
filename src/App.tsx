import React from 'react';
import LocalRepository from './app/data/localRepository';
import GetAlgorithmService from './app/domain/services/getAlgorithmService';
import HomePage from './app/view/HomePage';

const App: React.FC = () => {
  const createGetAlgorithmService = () => {
    return new GetAlgorithmService(new LocalRepository())
  };

  return (
    <HomePage service={createGetAlgorithmService()} />
  );
}

export default App;

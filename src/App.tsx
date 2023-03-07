import React from 'react';
import RemoteRepository from './app/data/remoteRepository';
import GetAlgorithmService from './app/domain/services/getAlgorithmService';
import HomePage from './app/view/HomePage';

const App: React.FC = () => {
  const createGetAlgorithmService = () => {
    return new GetAlgorithmService(new RemoteRepository())
  };

  return (
    <HomePage service={createGetAlgorithmService()} />
  );
}

export default App;

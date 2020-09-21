import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// eslint-disable-next-line import/no-unresolved
import Routes from './routes';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

export default App;

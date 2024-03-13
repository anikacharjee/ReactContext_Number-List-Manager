import React from 'react';
import CounterComponent from './components/CounterComponent';
import { StateProvider } from './context/CounterContext';

const App = () => {
  return (
    <StateProvider>
      <CounterComponent/>
    </StateProvider>
  );
};

export default App;
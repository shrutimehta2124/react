import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import FormContainer from './components/FormContainer';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <FormContainer />
    </Provider>
  );
};

export default App;

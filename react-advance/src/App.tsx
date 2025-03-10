import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import UserForm from './components/UserForm';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <UserForm />
    </Provider>
  );
};

export default App;

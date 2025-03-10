import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserForm from './components/UserForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserForm />} />
      </Routes>
    </Router>
  );
}

export default App;

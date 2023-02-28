import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
import { Login } from './components/Login';

const App = () => {
  return (
    <div>
    <h1>Application</h1>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}>
        </Route>
        <Route path="/dashboard" element={<Dashboard/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;

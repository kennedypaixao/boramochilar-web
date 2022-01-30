import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Explorer from 'pages/Explorer';
import Login from 'pages/Login';

export const PageRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Explorar' element={<Explorer />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </Router>
  );
};
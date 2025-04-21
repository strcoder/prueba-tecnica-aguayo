// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UserDetails from './pages/UserDetails';
import { CssBaseline, Container } from '@mui/material';

export const App = ()  => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Container maxWidth="md">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:id" element={<UserDetails />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}
export default App;

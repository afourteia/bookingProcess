import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardMain from './components/Dashboard';
import BookingPage from './components/Dashboard/BookingPage';
import Login from './components/Login';
import { AuthProvider } from './context/AuthContext';
import theme from './theme';

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<DashboardMain />}>
              <Route path="booking" element={<BookingPage />} />
            </Route>
            <Route path="*" element={<h1>404</h1>} />
          </Routes>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

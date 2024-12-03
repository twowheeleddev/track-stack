/**
 * App.jsx
 *
 * This component is responsible for the layout, providers and routing of the app
 */
import AppRoutes from './routes/AppRoutes';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { ThemeProvider } from './context/ThemeProvider';
import ResponsiveProvider from './context/ResponsiveProvider';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => (
  <ThemeProvider>
    <ResponsiveProvider>
      <Router>
        <Header />
        <AppRoutes />
        <Footer />
      </Router>
    </ResponsiveProvider>
  </ThemeProvider>
);

export default App;

/**
 * App.jsx
 *
 * This component is responsible for the layout, providers, and routing of the app.
 */

import AppRoutes from './routes/AppRoutes';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/ScrollToTop'; // Ensures the user starts at the top of each page
import { ThemeProvider } from './context/ThemeProvider';
import ResponsiveProvider from './context/ResponsiveProvider';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => (
  <ThemeProvider>
    <ResponsiveProvider>
      <Router>
        <ScrollToTop />
        <div className='min-h-screen flex flex-col'>
          {/* Header */}
          <Header />

          {/* Main Content */}
          <main className='flex-grow'>
            <AppRoutes />
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </Router>
    </ResponsiveProvider>
  </ThemeProvider>
);

export default App;

import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';
import PageTransitionWrapper from '../components/layout/PageTransitionWrapper';

// Lazy-loaded pages
const LandingPage = lazy(() =>
  import('../components/pages/LandingPage')
);
const OrganizeLibraryPage = lazy(() =>
  import('../components/pages/OrganizeLibraryPage')
);
const DemoPage = lazy(() => import('../components/pages/DemoPage'));

// Loader Component for Suspense fallback
const Loader = () => (
  <div className='flex items-center justify-center h-screen'>
    <div className='w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin'></div>
  </div>
);

const AppRoutes = () => (
  <>
    <ScrollToTop />
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route
          path='/'
          element={
            <PageTransitionWrapper>
              <LandingPage />
            </PageTransitionWrapper>
          }
        />
        <Route
          path='/organize-library'
          element={
            <PageTransitionWrapper>
              <OrganizeLibraryPage />
            </PageTransitionWrapper>
          }
        />
        <Route
          path='/demo'
          element={
            <PageTransitionWrapper>
              <DemoPage />
            </PageTransitionWrapper>
          }
        />
      </Routes>
    </Suspense>
  </>
);

export default AppRoutes;

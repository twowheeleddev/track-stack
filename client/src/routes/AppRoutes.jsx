import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';
import PageTransitionWrapper from '../components/layout/PageTransitionWrapper';

const LandingPage = lazy(() =>
  import('../components/pages/LandingPage')
);
const OrganizeLibraryPage = lazy(() =>
  import('../components/pages/OrganizeLibraryPage')
);
const DemoPage = lazy(() => import('../components/pages/DemoPage'));

const AppRoutes = () => (
  <>
    <ScrollToTop />
    <Suspense fallback={<div>Loading...</div>}>
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

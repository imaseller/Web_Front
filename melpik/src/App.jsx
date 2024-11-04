import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import Theme from './styles/Theme';
import Loading from './components/Loading';
import BottomNav from './components/BottomNav';

const Home = lazy(() => import('./pages/Home'));
const HomeDetail = lazy(() => import('./pages/HomeDetail')); // Use lazy instead of lazyLoad

// Uncomment these lines as needed
// const Inventory = lazy(() => import('./pages/Inventory'));
// const Payment = lazy(() => import('./pages/Payment'));
// const Store = lazy(() => import('./pages/Store'));
// const Menu = lazy(() => import('./pages/Menu'));

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Router>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/item/:id' element={<HomeDetail />} />
            {/* Uncomment these routes as needed */}
            {/* <Route path='/inventory' element={<Inventory />} />
            <Route path='/payment' element={<Payment />} />
            <Route path='/store' element={<Store />} />
            <Route path='/menu' element={<Menu />} /> */}
          </Routes>
          <BottomNav />
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;

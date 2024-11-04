// App.jsx

import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import Theme from './styles/Theme';
import Loading from './components/Loading'; // Import the Loading component

const Home = lazy(() => import('./pages/Home'));

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Router>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path='/home' element={<Home />} />
          </Routes>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;

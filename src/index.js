import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from "reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import {GlobalProvider} from 'components/common/GlobalProvider';
import TestPage from 'components/common/TestPage';
import LoadingSpinner from 'components/common/LoadingSpinner';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      {/*<React.StrictMode>*/}
        
          <GlobalProvider>
            <LoadingSpinner>
              <TestPage/>
            </LoadingSpinner>
          </GlobalProvider>
        
      {/*</React.StrictMode>*/}
  </BrowserRouter>
);

reportWebVitals();
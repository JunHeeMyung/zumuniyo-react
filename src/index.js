import React from 'react';
import ReactDOM from 'react-dom/client';
import TestPage from 'components/common/TestPage';
import reportWebVitals from "reportWebVitals";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      {/*<React.StrictMode>*/}
        <TestPage />
      {/*</React.StrictMode>*/}
  </BrowserRouter>
);

reportWebVitals();
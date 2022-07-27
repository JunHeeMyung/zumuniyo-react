import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from "reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import LoginProvider from 'components/member/LoginProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      {/*<React.StrictMode>*/}
        <LoginProvider/>
      {/*</React.StrictMode>*/}
  </BrowserRouter>
);

reportWebVitals();
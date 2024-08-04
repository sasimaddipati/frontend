import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MyProvider } from './components/MyContext';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <MyProvider>
      <App />
    </MyProvider>,
  document.getElementById('root')
);

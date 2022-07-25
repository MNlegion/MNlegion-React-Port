import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';

// import { createRoot } from 'react-dom/client';
// const container = document.getElementById('App');
// const root = createRoot(container);
// root.render(<App tab="home" />);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// serviceWorker.unregister();
reportWebVitals();

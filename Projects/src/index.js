import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { TodoLayer } from './context/TodoContext';
import reducer from './context/reducer';
import { initialState } from './context/reducer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoLayer initialState={initialState} reducer={reducer}>
    <App />

    </TodoLayer>
    
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*
 * @Author: nemo
 * @Date: 2022-02-13 18:52:48
 * @LastEditTime: 2022-02-19 18:30:33
 * @LastEditors: nemo
 * @FilePath: /tailwind-theme-demo/src/index.tsx
 */

import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom';

import App from './App'
import './index.css';

ReactDom.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

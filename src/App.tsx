/*
 * @Author: nemo
 * @Date: 2022-02-13 18:58:56
 * @LastEditTime: 2022-02-19 18:25:11
 * @LastEditors: nemo
 * @FilePath: /tailwind-theme-demo/src/App.tsx
 */
import { Routes, Route } from 'react-router-dom'

import Home from '@pages/home/index.tsx';
import User from '@pages/user/index.tsx';

import styles from './App.less'

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/user" element={<User />} />
  </Routes>
)

export default App

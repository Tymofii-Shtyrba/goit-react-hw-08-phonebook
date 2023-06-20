import Layout from 'components/Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import Login from 'pages/Login';
import Register from 'pages/Register';
import Contacts from 'pages/Contacts';
import { useEffect } from 'react';
import { refresh } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';

import Home from 'pages/Home';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refresh());
  });

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
};

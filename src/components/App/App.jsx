import Layout from 'components/Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import Login from 'pages/Login';
import Register from 'pages/Register';
import Contacts from 'pages/Contacts';
import { useEffect } from 'react';
import { refresh } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectLoginStatus } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';

export const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectLoginStatus);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  useEffect(() => {
    if (!isLoggedIn) return;
    navigate('/contacts', { replace: true });
  }, [isLoggedIn, navigate]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
};

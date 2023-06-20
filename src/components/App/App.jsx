import Layout from 'components/Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import Login from 'pages/Login';
import Register from 'pages/Register';
import Contacts from 'pages/Contacts';
import { useEffect } from 'react';
import { refresh } from 'redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectLoginStatus, selectRefreshStatus } from 'redux/auth/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshed = useSelector(selectRefreshStatus);
  const isLoggedin = useSelector(selectLoginStatus);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  useEffect(() => {
    if (!isRefreshed) return;
    isLoggedin
      ? navigate('/contacts', { replace: true })
      : navigate('/login', { replace: true });
  }, [isRefreshed, isLoggedin, navigate]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
};

import React, { useEffect } from 'react';
import LoginForm from 'components/LoginForm/LoginForm';
import { useSelector } from 'react-redux';
import { selectLoginStatus } from 'redux/auth/selectors';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const isLoggedin = useSelector(selectLoginStatus);
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedin) {
      navigate('/contacts', { replace: true });
    }
  });
  return (
    <div>
      <LoginForm />
    </div>
  );
}

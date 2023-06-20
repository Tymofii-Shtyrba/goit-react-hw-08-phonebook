import RegisterForm from 'components/RegisterForm/RegisterForm';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectLoginStatus } from 'redux/auth/selectors';

export default function Register() {
  const isLoggedin = useSelector(selectLoginStatus);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedin) {
      navigate('/contacts', { replace: true });
    }
  }, [isLoggedin, navigate]);
  return (
    <div>
      <RegisterForm />
    </div>
  );
}

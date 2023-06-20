import Phonebook from 'components/Phonebook/Phonebook';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectLoginStatus } from 'redux/auth/selectors';

export default function Contacts() {
  const isLoggedin = useSelector(selectLoginStatus);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedin) {
      navigate('/login', { replace: true });
    }
  });
  return (
    <div>
      <Phonebook />
    </div>
  );
}

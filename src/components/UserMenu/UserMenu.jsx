import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/operations';
import { useSelector } from 'react-redux';
import { selectUserEmail } from 'redux/auth/selectors';
import { useNavigate } from 'react-router-dom';

export default function UserMenu() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userEmail = useSelector(selectUserEmail);

  const onClick = () => {
    navigate('/login', { replace: true });
    dispatch(logout());
  };

  return (
    <div>
      <p>{userEmail}</p>
      <button onClick={onClick} type="button">
        Logout
      </button>
    </div>
  );
}

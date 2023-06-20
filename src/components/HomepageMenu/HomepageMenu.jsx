import { useNavigate } from 'react-router-dom';
import { StyledHomepageMenu } from './HomepageMenu.styled';

export default function HomepageMenu() {
  const navigate = useNavigate();
  const signIn = () => {
    navigate('/login');
  };
  const register = () => {
    navigate('/register');
  };
  return (
    <StyledHomepageMenu>
      <h1>welcome to contact app</h1>
      <h2>sign in or register</h2>
      <div>
        <button type="button" onClick={signIn}>
          Sign in 🔑
        </button>
        <button type="button" onClick={register}>
          Register ✍️
        </button>
      </div>
    </StyledHomepageMenu>
  );
}

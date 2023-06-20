import { StyledLinkToRegisterForm } from './LinkToRegisterForm.styled';
import { Link } from 'react-router-dom';

export default function LinkToRegisterForm() {
  return (
    <StyledLinkToRegisterForm>
      <p>Don't have an account? 🤔</p>
      <Link to={'/register'}>Create a new one👈</Link>
    </StyledLinkToRegisterForm>
  );
}

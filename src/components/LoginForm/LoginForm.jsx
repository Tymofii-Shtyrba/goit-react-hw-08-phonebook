import { login } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';

export default function LoginForm() {
  const dispatch = useDispatch();

  const onSubmit = event => {
    event.preventDefault();
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    dispatch(login({ email, password }));
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        Email
        <input type="text" name="email" required />
      </label>
      <label>
        Password
        <input type="text" name="password" required />
      </label>
      <button type="submit">Login</button>
    </form>
  );
}

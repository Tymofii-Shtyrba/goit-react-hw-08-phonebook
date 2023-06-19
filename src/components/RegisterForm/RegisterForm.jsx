import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

export default function RegisterForm() {
  const dispatch = useDispatch();

  const onSubmit = event => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    console.log({ name, email, password });
    dispatch(register({ name, email, password }));
    event.target.reset();
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        Name
        <input type="text" required id="name" />
      </label>
      <label>
        Email
        <input type="text" required id="email" />
      </label>
      <label>
        Password
        <input type="text" required id="password" />
      </label>
      <button type="submit">Create an account</button>
    </form>
  );
}

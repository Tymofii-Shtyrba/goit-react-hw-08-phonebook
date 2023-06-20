import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { StyledContactForm } from './ContactForm.styled';

export default function ContactForm() {
  const dispatch = useDispatch();

  const onSubmin = event => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const number = event.target.elements.number.value;
    dispatch(addContact({ name, number }));
    event.target.reset();
  };

  return (
    <StyledContactForm onSubmit={onSubmin}>
      <label>
        Name
        <input type="text" name="name" required />
      </label>
      <label>
        Number
        <input type="text" name="number" required />
      </label>
      <button type="submit">Add contact</button>
    </StyledContactForm>
  );
}

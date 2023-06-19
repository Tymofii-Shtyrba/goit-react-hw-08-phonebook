import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';

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
    <form onSubmit={onSubmin}>
      <label>
        Name
        <input type="text" name="name" required />
      </label>
      <label>
        Number
        <input type="text" name="number" required />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
}

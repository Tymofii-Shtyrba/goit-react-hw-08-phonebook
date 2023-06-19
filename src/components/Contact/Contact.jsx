import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <li>
      <span>{name}</span>
      <span>{number}</span>
      <button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </li>
  );
}

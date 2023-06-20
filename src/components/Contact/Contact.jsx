import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { StyledContact } from './Contact.styled';

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <StyledContact>
      <span>{name}</span>
      <span>{number}</span>
      <button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </StyledContact>
  );
}

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { StyledContact } from './Contact.styled';
import { useState } from 'react';
import { StyledEditForm } from './Contact.styled';
import { editContact } from 'redux/contacts/operations';

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  const [editor, setEditor] = useState(true);

  const onSubmit = event => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const number = event.target.elements.number.value;
    setEditor(true);
    dispatch(editContact({ id, name, number }));
  };

  return (
    <>
      {editor ? (
        <StyledContact>
          <span>{name}</span>
          <span>{number}</span>
          <button type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </button>
          <button type="button" onClick={() => setEditor(!editor)}>
            Edit
          </button>
        </StyledContact>
      ) : (
        <StyledEditForm>
          <form onSubmit={onSubmit}>
            <label>
              <input type="text" name="name" placeholder={name} />
            </label>
            <label>
              <input type="text" name="number" placeholder={number} />
            </label>
            <button type="submit">Ok</button>
            <button type="button" onClick={() => setEditor(!editor)}>
              Cancel
            </button>
          </form>
        </StyledEditForm>
      )}
    </>
  );
}

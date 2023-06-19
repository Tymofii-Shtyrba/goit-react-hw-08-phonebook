import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import { useDispatch } from 'react-redux';
import { getContacnts } from 'redux/contacts/operations';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectLoginStatus } from 'redux/auth/selectors';
import Filter from 'components/Filter/Filter';
import { PhonebookWrapper } from './Phonebook.styled';

export default function Phonebook() {
  const dispatch = useDispatch();
  const isLogged = useSelector(selectLoginStatus);
  useEffect(() => {
    if (!isLogged) return;
    dispatch(getContacnts());
  }, [dispatch, isLogged]);

  return (
    <PhonebookWrapper>
      <ContactForm />
      <Filter />
      <ContactList />
    </PhonebookWrapper>
  );
}

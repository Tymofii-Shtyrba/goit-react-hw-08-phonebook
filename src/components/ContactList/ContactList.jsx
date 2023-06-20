import Contact from 'components/Contact/Contact';
import { useSelector } from 'react-redux';
import { selectListItems } from 'redux/contacts/selectors';
import { StyledList } from './ContactList.styled';

export default function ContactList() {
  const items = useSelector(selectListItems);
  return (
    <StyledList>
      {items.map(item => (
        <Contact key={item.id} {...item} />
      ))}
    </StyledList>
  );
}

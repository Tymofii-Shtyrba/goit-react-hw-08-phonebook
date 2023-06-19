import Contact from 'components/Contact/Contact';
import { useSelector } from 'react-redux';
import { selectListItems } from 'redux/contacts/selectors';

export default function ContactList() {
  const items = useSelector(selectListItems);
  return (
    <ul>
      {items.map(item => (
        <Contact key={item.id} {...item} />
      ))}
    </ul>
  );
}

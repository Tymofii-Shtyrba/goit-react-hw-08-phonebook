import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/slice';
import { StyledFilter } from './Filter.styled';

export default function Filter() {
  const dispatch = useDispatch();

  const onChange = event => {
    const filter = event.target.value;
    dispatch(setFilter(filter));
  };

  return (
    <StyledFilter>
      Find by name
      <input type="text" onChange={onChange} />
    </StyledFilter>
  );
}

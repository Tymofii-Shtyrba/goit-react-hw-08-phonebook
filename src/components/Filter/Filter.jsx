import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/slice';

export default function Filter() {
  const dispatch = useDispatch();

  const onChange = event => {
    const filter = event.target.value;
    dispatch(setFilter(filter));
  };

  return (
    <label>
      Find by name
      <input type="text" onChange={onChange} />
    </label>
  );
}

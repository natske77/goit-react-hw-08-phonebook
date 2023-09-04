import { useDispatch, useSelector } from 'react-redux';

import { setFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';
import { Input, Label } from './Filter.styled';

export function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChangeFilter = evt => {
    dispatch(setFilter(evt.target.value));
  };

  return (
    <div>
      <Label>
        Find contact by name
        <Input type="text" onChange={onChangeFilter} value={filter} />
      </Label>
    </div>
  );
}

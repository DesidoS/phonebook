import { useDispatch } from 'react-redux';
import { setStatusFilter } from '../../redux/contact/filtersSlice';
import { Input, FormLabel } from '@chakra-ui/react';

const Filter = () => {
  const dispatch = useDispatch();
  const handleFilterChange = e => {
    dispatch(setStatusFilter(e.currentTarget.value));
  };

  return (
    <FormLabel>
      Find contact by name
      <Input type="name" required onChange={handleFilterChange} />
    </FormLabel>
  );
};

export default Filter;

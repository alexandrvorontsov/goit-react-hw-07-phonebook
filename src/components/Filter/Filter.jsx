import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/slice';
import { selectFilter } from 'redux/selectors';
import { FilterLabel, FilterInput } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilter = evt => {
    dispatch(filterContact(evt.target.value));
  };

  return (
    <div>
      <FilterLabel>
        Find contacts by name
        <FilterInput
          type="text"
          name="filter"
          value={filter}
          onChange={handleFilter}
        />
      </FilterLabel>
    </div>
  );
};

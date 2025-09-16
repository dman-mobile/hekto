import React from 'react';
import { ChevronDownIcon } from '../../icons/Icons';
import {
  IconWrapper,
  Label,
  SelectWrapper,
  StyledSelect,
  Wrapper,
} from './SortSelector.styles';
import { SortSelectorProps } from '@/types/Selector';

const SortSelector: React.FC<SortSelectorProps> = ({
  value,
  onChange,
  options = ['Price: High -> Low', 'Price: Low -> High', 'Name: A -> Z', 'Name: Z -> A'],
  label = 'Sort By',
}) => {
  const selectId = 'sort-by-select';

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <Wrapper>
      <Label htmlFor={selectId}>{label}</Label>
      <SelectWrapper>
        <StyledSelect id={selectId} value={value} onChange={handleChange}>
          {options.map((optionValue) => (
            <option key={optionValue} value={optionValue}>
              {optionValue}
            </option>
          ))}
        </StyledSelect>
        <IconWrapper>
          <ChevronDownIcon />
        </IconWrapper>
      </SelectWrapper>
    </Wrapper>
  );
};

export default SortSelector;
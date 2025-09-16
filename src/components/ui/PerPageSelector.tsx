import React from 'react';
import { ChevronDownIcon } from '../../icons/Icons';
import {
  IconWrapper,
  Label,
  SelectWrapper,
  StyledSelect,
  Wrapper,
} from './PerPageSelector.styles';
import { PerPageSelectorProps } from '@/types/Selector';

const PerPageSelector: React.FC<PerPageSelectorProps> = ({
  value,
  onChange,
  options = [5, 10, 15, 50],
  label = 'Per Page',
}) => {
  const selectId = 'per-page-select';

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(Number(event.target.value));
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

export default PerPageSelector;
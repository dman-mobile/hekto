import React from 'react';
import { ChevronDownIcon } from '../../icons/ProductsPageIcons.tsx';
import {
  IconWrapper,
  SelectWrapper,
  StyledSelect,
  Wrapper,
} from './Selector.styles.tsx';
import { CurrencySelectorProps } from '@/types/Selector';

const CurrencySelector: React.FC<CurrencySelectorProps> = ({
  value,
  onChange,
  options = ["USD", "AR$"],
}) => {
  const selectId = 'currency';

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <Wrapper>
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

export default CurrencySelector;
import React from 'react';
import { ChevronDownIcon } from '../../icons/ProductsPageIcons';
import { IconWrapper, SelectWrapper, StyledSelect, Wrapper } from './Selector.styles';
import { CurrencySelectorProps, Currency } from '../../types/Selector';

const CurrencySelector: React.FC<CurrencySelectorProps> = ({ value, onChange }) => {
  const selectId = 'currency';

  const options = Object.values(Currency);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as Currency);
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
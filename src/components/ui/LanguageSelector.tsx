import React from 'react';
import { ChevronDownIcon } from '../../icons/ProductsPageIcons';
import {
  IconWrapper,
  SelectWrapper,
  StyledSelect,
  Wrapper,
} from './Selector.styles.tsx';
import { LanguageSelectorProps } from '@/types/Selector';

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  value,
  onChange,
  options = ["English", "Español"],
}) => {
  const selectId = 'language';

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

export default LanguageSelector;
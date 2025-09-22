import React from 'react';
import { ChevronDownIcon } from '../../icons/ProductsPageIcons';
import { IconWrapper, SelectWrapper, StyledSelect, Wrapper } from './Selector.styles';
import { LanguageSelectorProps, Language } from '../../types/Selector';

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ value, onChange }) => {
  const selectId = 'language';

  const options = Object.values(Language);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as Language);
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
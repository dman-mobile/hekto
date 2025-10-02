import React, { useRef, useState } from 'react';
import { ChevronDownIcon } from '../../icons/ProductsPageIcons';
import { IconWrapper, OptionItem, OptionsList, SelectedValueDisplay, SelectWrapper, Wrapper } from './Selector.styles';
import { CurrencySelectorProps, Currency } from '../../types/Selector';
import { useOutsideClick } from '../../hooks/useOutsideClick';

const CurrencySelector: React.FC<CurrencySelectorProps> = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectId = 'currency-selector';
  const options = Object.values(Currency);

  const selectorRef = useRef<HTMLDivElement>(null);
  
  useOutsideClick(selectorRef, () => setIsOpen(false));

  const handleOptionClick = (optionValue: Currency) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <Wrapper>
      <SelectWrapper ref={selectorRef}>
        <SelectedValueDisplay
          id={selectId}
          onClick={toggleDropdown}
          role="combobox"
          aria-expanded={isOpen}
          aria-controls={`${selectId}-list`}
        >
          {value}
        </SelectedValueDisplay>

        <IconWrapper onClick={toggleDropdown}>
          <ChevronDownIcon />
        </IconWrapper>

        {isOpen && (
          <OptionsList id={`${selectId}-list`} role="listbox">
            {options.map((optionValue) => (
              <OptionItem
                key={optionValue}
                onClick={() => handleOptionClick(optionValue)}
                role="option"
                aria-selected={value === optionValue}
              >
                {optionValue}
              </OptionItem>
            ))}
          </OptionsList>
        )}
      </SelectWrapper>
    </Wrapper>
  );
};

export default CurrencySelector;
import React, { useState, useRef } from 'react';
import { ChevronDownIcon } from '../../icons/ProductsPageIcons';
import {
  IconWrapper,
  OptionItem,
  OptionsList,
  SelectWrapper,
  SelectedValueDisplay, // Renamed from StyledSelect
  Wrapper,
} from './Selector.styles';
import { LanguageSelectorProps, Language } from '../../types/Selector';
import { useOutsideClick } from '../../hooks/useOutsideClick'; // Import the custom hook

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectId = 'language-selector';
  const options = Object.values(Language);

  const selectorRef = useRef<HTMLDivElement>(null);
  
  useOutsideClick(selectorRef, () => setIsOpen(false));

  const handleOptionClick = (optionValue: Language) => {
    onChange(optionValue); // Update the parent state
    setIsOpen(false); // Close the dropdown
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

export default LanguageSelector;
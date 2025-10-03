import React, { useRef, useState } from 'react';
import { ChevronDownIcon } from '../../icons/ProductsPageIcons';
import {
  IconWrapper,
  Label,
  SelectWrapper,
  Wrapper,
} from './Selector.styles';
import { PerPageSelectorProps } from '@/types/Selector';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { OptionItem, OptionsList, SelectedValueDisplayOutlined } from './Selector.styles';

const PerPageSelector: React.FC<PerPageSelectorProps> = ({
  value,
  onChange,
  options = [5, 10, 15, 50],
  label = 'Per Page',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectId = 'currency-selector';

  const selectorRef = useRef<HTMLDivElement>(null);
  
  useOutsideClick(selectorRef, () => setIsOpen(false));

  const handleOptionClick = (optionValue: number) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <Wrapper>
      <Label>{label}</Label>
      <SelectWrapper ref={selectorRef}>
        <SelectedValueDisplayOutlined
          id={selectId}
          onClick={toggleDropdown}
          role="combobox"
          aria-expanded={isOpen}
          aria-controls={`${selectId}-list`}
        >
          {value}
        </SelectedValueDisplayOutlined>

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

export default PerPageSelector;
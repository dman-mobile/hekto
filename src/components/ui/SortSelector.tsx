import React, { useRef, useState } from 'react';
import { ChevronDownIcon } from '../../icons/ProductsPageIcons';
import {
  IconWrapper,
  Label,
  SelectWrapper,
  Wrapper,
} from './Selector.styles';
import { SortSelectorProps } from '@/types/Selector';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { SelectedValueDisplayOutlined, OptionsList, OptionItem } from './Selector.styles';

const SortSelector: React.FC<SortSelectorProps> = ({
  value,
  onChange,
  options = ['Price: High -> Low', 'Price: Low -> High', 'Name: A -> Z', 'Name: Z -> A'],
  label = 'Sort By',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectId = 'sort-by-selector';

  const selectorRef = useRef<HTMLDivElement>(null);
  
  useOutsideClick(selectorRef, () => setIsOpen(false));

  const handleOptionClick = (optionValue: string) => {
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

export default SortSelector;
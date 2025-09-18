export interface PerPageSelectorProps {
  value: number;
  onChange: (newValue: number) => void;
  options?: number[];
  label?: string;
}

export interface SortSelectorProps {
  value: string;
  onChange: (newValue: string) => void;
  options?: string[];
  label?: string;
}

export interface LanguageSelectorProps {
  value: string;
  onChange: (newValue: string) => void;
  options?: string[];
  label?: string;
}

export interface CurrencySelectorProps {
  value: string;
  onChange: (newValue: string) => void;
  options?: string[];
  label?: string;
}
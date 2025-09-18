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

export enum Currency {
  USD = "USD",
  ARS = "AR$",
}

export enum Language {
  english = "English",
  español = "Español",
}


export interface LanguageSelectorProps {
  value: Language;
  onChange: (value: Language) => void;
}

export interface CurrencySelectorProps {
  value: Currency;
  onChange: (value: Currency) => void;
}
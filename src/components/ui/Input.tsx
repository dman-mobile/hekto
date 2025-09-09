import { ButtonSearch } from "./Button.styles";
import { InputWrapper } from "./Input.styles";

export default function Input() {
  return (
    <InputWrapper>
      <input placeholder="Search" type="text" name="search" id="search" />
      <ButtonSearch>
        <svg style={{color: 'var(--color-white)'}} fill="white" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
          <use href="/icons.svg#icon-search"></use>
        </svg>
      </ButtonSearch>
    </InputWrapper>
  )
}
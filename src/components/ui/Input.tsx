import { InputProps } from "../../types/Input";
import { ButtonSearch, Button } from "./Button.styles";
import { InputWrapper } from "./Input.styles";

export default function Input({ inputType }: InputProps) {
  return (
    <InputWrapper>
      {inputType === 'email' ?
        <>
          <input autoComplete='email' placeholder="Enter email address" type="email" name="email" id="email" />
          <Button>
            Sign Up
          </Button>
        </>
        :
        <>
          <input placeholder="Search" type="text" name="search" id="search" />
          <ButtonSearch>
            <svg style={{ color: 'var(--color-white)' }} fill="white" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <use href="/icons.svg#icon-search"></use>
            </svg>
          </ButtonSearch>
        </>
      }
    </InputWrapper>
  )
}
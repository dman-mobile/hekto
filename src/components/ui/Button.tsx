import { ReactElement } from "react";
import { ButtonBig } from "./Button.styles";

export default function Button({children}: {children: ReactElement}){
  return(
    <ButtonBig>
      {children}
    </ButtonBig>
  )
}
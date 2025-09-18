import { NavLink } from "react-router-dom";
import {
  ContactContainer,
  ContactField,
  HeaderContainer,
  HeaderWrapper,
  MenuContainer,
  MenuLink,
  NavContainer,
  NavLinks,
  NavWrapper,
} from "./AppHeader.styles";
import { FlexCenter } from "../styled-components/Flex.styles";
import Input from "./ui/Input";
import { NavLinkStyleProps } from "@/types/Links";
import { MailIcon, PhoneIcon, UserIcon } from "../icons/HeaderIcons";
import { ChevronDownIcon } from "../icons/ProductsPageIcons";
import { CartIcon } from "../icons/Icons";
import LanguageSelector from "./ui/LanguageSelector";
import CurrencySelector from "./ui/CurrencySelector";
import { Currency, Language } from "../types/Selector";

const AppHeader = () => {
  const navLinkStyles = ({ isActive }: NavLinkStyleProps) => {
    return {
      color: isActive ? 'var(--color-primary)' : 'inherit',
    };
  };

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <ContactContainer>
          <ContactField>
            <MailIcon />
            mwasyluk@griddynamics.com
          </ContactField>
          <ContactField>
            <PhoneIcon />
            (12345)67890
          </ContactField>
        </ContactContainer>
        <MenuContainer>
          <LanguageSelector value={Language.english} onChange={function (newValue: string): void {
            throw new Error("Function not implemented.");
          }} /> {/* Será implementado con Redux Toolkit mas adelante*/}
          <CurrencySelector value={Currency.USD} onChange={function (newValue: string): void {
            throw new Error("Function not implemented.");
          } } /> {/* Será implementado con Redux Toolkit mas adelante*/}
          <MenuLink>
            Login
            <UserIcon />
          </MenuLink>
          <MenuLink>
            Wishlist
            <ChevronDownIcon />
          </MenuLink>
          <NavLink to={'/cart'}>
            <CartIcon />
          </NavLink>
        </MenuContainer>
      </HeaderContainer>
      <NavWrapper>
        <NavContainer>
          <FlexCenter>
            <img src="/Logo.png" alt="logo" />
            <NavLinks>
              <li><NavLink to={'/'} style={navLinkStyles}>Home</NavLink></li>
              <li><NavLink to={'/products'} style={navLinkStyles}>Products</NavLink></li>
              <li><NavLink to={'/blog'} style={navLinkStyles}>Blog</NavLink></li>
              <li><NavLink to={'/contact'} style={navLinkStyles}>Contact</NavLink></li>
            </NavLinks>
          </FlexCenter>
          <Input inputType="search" />
        </NavContainer>
      </NavWrapper>
    </HeaderWrapper>
  );
};

export default AppHeader;
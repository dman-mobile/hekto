import { NavLink } from "react-router-dom";
import {
  ContactContainer,
  ContactField,
  Dropdown,
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
            <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
              <use href="/icons.svg#icon-mail"></use>
            </svg>
            mwasyluk@griddynamics.com
          </ContactField>
          <ContactField>
            <img src="/phone.png" alt="phone icon" />
            (12345)67890
          </ContactField>
        </ContactContainer>
        <MenuContainer>
          <Dropdown>
            English
            <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
              <use href="/icons.svg#chevron-down"></use>
            </svg>
          </Dropdown>
          <Dropdown>
            USD
            <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
              <use href="/icons.svg#chevron-down"></use>
            </svg>
          </Dropdown>
          <MenuLink>
            Login
            <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
              <use href="/icons.svg#icon-user"></use>
            </svg>
          </MenuLink>
          <MenuLink>
            Wishlist
            <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
              <use href="/icons.svg#chevron-down"></use>
            </svg>
          </MenuLink>
          <NavLink to={'/cart'}>
            <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
              <use href="/icons.svg#icon-cart"></use>
            </svg>
          </NavLink>
        </MenuContainer>
      </HeaderContainer>
      <NavWrapper>
        <NavContainer>
          <FlexCenter>
            <img src="/Logo.png" alt="logo" />
            <NavLinks sx={{ marginLeft: 8 }}>
              <li><NavLink to={'/'} style={navLinkStyles}>Home</NavLink></li>
              <li><NavLink to={'/products'} style={navLinkStyles}>Products</NavLink></li>
              <li><NavLink to={'/blog'} style={navLinkStyles}>Blog</NavLink></li>
              <li><NavLink to={'/contact'} style={navLinkStyles}>Contact</NavLink></li>
            </NavLinks>
          </FlexCenter>
          <Input />
        </NavContainer>
      </NavWrapper>
    </HeaderWrapper>
  );
};

export default AppHeader;
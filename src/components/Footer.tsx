import { FBIcon, TwitterIcon, IGIcon } from "../icons/Icons.tsx";
import { FlexBetween, FlexCenter, FlexColumn } from "../styled-components/Flex.styles";
import { Body, LabelSmall, SubtitleMedium } from "../styled-components/Typography.styles";
import { LinkColumn, FooterSection, FooterWrapper, SocialsWrapper, RoundLink } from "./Footer.styles.tsx";
import Input from "./ui/Input";

export default function Footer() {
  return (
    <FooterSection>
      <FooterWrapper>
        <FlexColumn className="info">
          <img src="/Logo.png" alt="logo" />
          <Input inputType='email' />
          <Body className='address'>
            17 Princess Road, London, Greater London NW1 8JR, UK
          </Body>
        </FlexColumn>
        <FlexBetween className="links">
          <LinkColumn>
            <SubtitleMedium>
              Categories
            </SubtitleMedium>
            <li><Body className='link'>Laptops & Computers</Body></li>
            <li><Body className='link'>Cameras & Photography</Body></li>
            <li><Body className='link'>Smartphones & Tablets</Body></li>
            <li><Body className='link'>Videogames & Consoles</Body></li>
            <li><Body className='link'>Waterproof Headphones</Body></li>
          </LinkColumn>
          <LinkColumn>
            <SubtitleMedium>
              Customer Core
            </SubtitleMedium>
            <li><Body className='link'>My Account</Body></li>
            <li><Body className='link'>Discount</Body></li>
            <li><Body className='link'>Returns</Body></li>
            <li><Body className='link'>Order History</Body></li>
            <li><Body className='link'>Order Tracking</Body></li>
          </LinkColumn>
          <LinkColumn>
            <SubtitleMedium>
              Pages
            </SubtitleMedium>
            <li><Body className='link'>Blog</Body></li>
            <li><Body className='link'>Browse The Shop</Body></li>
            <li><Body className='link'>Category</Body></li>
            <li><Body className='link'>Pre Built Pages</Body></li>
            <li><Body className='link'>Visual Composer Elements</Body></li>
          </LinkColumn>
        </FlexBetween>
      </FooterWrapper>
      <SocialsWrapper>
        <FlexBetween className="footer">
          <LabelSmall>
            ©Webecy - All Rights Reserved
          </LabelSmall>
          <FlexCenter className="socials-container">
            <RoundLink>
              <FBIcon />
            </RoundLink>
            <RoundLink>
              <TwitterIcon />
            </RoundLink>
            <RoundLink>
              <IGIcon />
            </RoundLink>
          </FlexCenter>
        </FlexBetween>
      </SocialsWrapper>
    </FooterSection>
  )
}
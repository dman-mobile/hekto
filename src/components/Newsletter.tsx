import { ImageWrapper, NewsletterSection } from "./Newsletter.styles";
import { ButtonBig } from "./ui/Button.styles";

export default function Newsletter() {
  return (
    <NewsletterSection>
      <h2>Get The Latest Updates By Subscribing To 0ur Newsletter</h2>
      <ButtonBig>Subscribe</ButtonBig>
      <ImageWrapper>
        <img src="/newsletter-bg.png" alt="couch and lamp background"/>
      </ImageWrapper>
    </NewsletterSection>
  )
}
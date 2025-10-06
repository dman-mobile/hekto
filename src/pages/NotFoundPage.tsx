import { ButtonBig } from "@/components/ui/Button.styles";
import { FlexCenter, FlexColumn } from "@/styled-components/Flex.styles";
import { Section } from "@/styled-components/Section.styles";
import { Body } from "@/styled-components/Typography.styles";
import { styled } from "@mui/system";

const ErrorContainer = styled(FlexColumn)({
  justifyContent: 'center',
  alignItems: 'center',
  gap: 'calc(var(--spacing-unit) * 2)'
})

export default function NotFoundPage() {
  return (
    <Section>
      <FlexCenter>
        <ErrorContainer>
          <h2>Error 404: Page not found</h2>
          <Body>The page you are looking for is not found.</Body>
          <a href="/products">
            <ButtonBig>Start Shopping</ButtonBig>
          </a>
        </ErrorContainer>
      </FlexCenter>
    </Section>
  )
}
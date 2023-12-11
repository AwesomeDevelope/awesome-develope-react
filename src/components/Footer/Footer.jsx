import { Container, Logotype } from 'components';
import { FooterWrapper, StyledFooter } from './Footer.styled';

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <StyledFooter>
          <Logotype />
          2023 @ All rights reserved.
        </StyledFooter>
      </Container>
    </FooterWrapper>
  );
}

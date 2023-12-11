import { Container, Logotype, Navigation } from 'components';
import { HeaderWrapper, StyledHeader } from './Header.styled';

export default function Header() {
  return (
    <HeaderWrapper>
      <Container>
        <StyledHeader>
          <Logotype />
          <Navigation />
        </StyledHeader>
      </Container>
    </HeaderWrapper>
  );
}

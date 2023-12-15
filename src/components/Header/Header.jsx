import { Container, Logotype, Navigation } from 'components';
import { HeaderWrapper, IconMenu, StyledHeader } from './Header.styled';
import MobileMenu from '../Mobile-menu/MobileMenu';
import { useEffect, useState } from 'react';

export default function Header() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [onShowMenu, setOnShowMenu] = useState(false);
  document.body.style.overflow = onShowMenu ? 'hidden' : 'visible';

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.body.style.overflow = 'visible';
    };
  }, []);

  const toggleMobileMenu = () => {
    setOnShowMenu(p => !p);
  };

  return (
    <>
      <HeaderWrapper>
        <Container>
          <StyledHeader>
            <Logotype />
            {screenWidth > 768 ? (
              <Navigation />
            ) : (
              <IconMenu onClick={toggleMobileMenu} />
            )}
          </StyledHeader>
        </Container>
      </HeaderWrapper>
      {screenWidth < 768 && (
        <MobileMenu onShow={onShowMenu} onClose={toggleMobileMenu} />
      )}
    </>
  );
}

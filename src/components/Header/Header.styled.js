import styled from '@emotion/styled';
import { CiMenuBurger } from 'react-icons/ci';

export const HeaderWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.backGroundBlack};
`;

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 68px;
`;

export const IconMenu = styled(CiMenuBurger)`
  fill: ${({ theme }) => theme.colors.textWhite};

  width: 26px;
  height: 26px;
`;

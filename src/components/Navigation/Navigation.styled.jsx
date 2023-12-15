import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Link = styled(NavLink)`
  color: ${({ theme }) => theme.colors.textWhite};
  padding: 9px 0;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;

  &.active {
    color: ${({ theme }) => theme.colors.accent};
    position: relative;
  }

  &.active::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -15px;
    width: 100%;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.accent};
    border-radius: 2px;
  }

  transition: color 250ms ease-in-out;

  :hover {
    color: ${({ theme }) => theme.colors.accent};
    position: relative;
  }

  ::after {
    content: '';
    position: absolute;
    bottom: -15px;
    right: 0;
    width: 0%;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.accent};
    border-radius: 2px;

    transition: all 250ms ease-in-out;
  }

  :hover::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -15px;
    width: 100%;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.accent};
    border-radius: 2px;
  }
`;

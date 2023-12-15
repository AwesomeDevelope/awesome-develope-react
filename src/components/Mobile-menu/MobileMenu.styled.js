import styled from '@emotion/styled';

export const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  background: rgba(0, 0, 0, 0.3);

  &.backdrop-wrapper-enter {
    opacity: 0;
  }

  &.backdrop-wrapper-enter-active {
    opacity: 1;
    transition: opacity 200ms ease-in-out;
  }

  &.backdrop-wrapper-exit {
    opacity: 1;
  }

  &.backdrop-wrapper-exit-active {
    opacity: 0;
    transition: opacity 200ms ease-in-out 200ms;
  }
`;

export const MobileMenuWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  z-index: 99;
  background: rgba(0, 0, 0, 0.8);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &.modal-wrapper-enter {
    opacity: 0;
    transform: translateX(-100%);
  }

  &.modal-wrapper-enter-active {
    opacity: 1;
    transform: translateX(0%);

    transition:
      opacity 200ms ease-in-out 200ms,
      transform 200ms ease-in-out 200ms;
  }

  &.modal-wrapper-exit {
    opacity: 1;
    transform: translateX(0%);
  }

  &.modal-wrapper-exit-active {
    opacity: 0;
    transform: translateX(-100%);

    transition:
      opacity 200ms ease-in-out,
      transform 200ms ease-in-out;
  }
`;

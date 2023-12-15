import { createPortal } from 'react-dom';
import Navigation from '../Navigation/Navigation';
import { Backdrop, MobileMenuWrapper } from './MobileMenu.styled';
import Logotype from '../Logotype/Logotype';
import { CSSTransition } from 'react-transition-group';
import { useRef } from 'react';

const MobileMenu = ({ onShow, onClose }) => {
  const mobileMenuRef = document.querySelector('#modal-menu');
  const backdropRef = useRef(null);
  const modalRef = useRef(null);

  return createPortal(
    <>
      <CSSTransition
        in={onShow}
        nodeRef={backdropRef}
        timeout={400}
        classNames="backdrop-wrapper"
        unmountOnExit
      >
        <Backdrop onClick={onClose} ref={backdropRef} />
      </CSSTransition>
      <CSSTransition
        in={onShow}
        nodeRef={modalRef}
        timeout={400}
        classNames="modal-wrapper"
        unmountOnExit
      >
        <MobileMenuWrapper ref={modalRef}>
          <Logotype />
          <Navigation />
        </MobileMenuWrapper>
      </CSSTransition>
    </>,
    mobileMenuRef,
  );
};

export default MobileMenu;

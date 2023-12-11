import styled from '@emotion/styled';

export const ConsultationWrap = styled.div``;

export const Title = styled.h2`
  display: flex;
  gap: 10px;

  margin-bottom: 25px;

  font-size: 68px;
  letter-spacing: -3.92px;
  text-transform: uppercase;

  span {
    :first-of-type {
      font-weight: 700;
    }

    :last-of-type {
      font-weight: 200;
    }
  }
`;

export const List = styled.ul`
  display: grid;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    row-gap: 30px;
    column-gap: 20px;
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(auto-fill, minmax(430px, 1fr));
    row-gap: 40px;
    column-gap: 20px;
  }
`;

export const Item = styled.li`
  position: relative;
  border-radius: 15px;
  overflow: hidden;

  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(17, 17, 17, 1) 100%
    );
  }
  .overlay {
    position: absolute;
    bottom: 0;
    z-index: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 20px;
    width: 100%;

    color: #ffffff;

    h3 {
    }

    p {
    }

    button {
      color: #ffffff;
      background-color: gray;
      margin: 0 auto;
      padding: 8px 35px;
      border-radius: 5px;
    }
  }
`;
